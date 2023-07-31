import User from '../models/User';
import bcrypt from 'bcrypt';

const getJoin = (req, res) =>
    res.render('join', { pageTitle: 'Create Account' });
const postJoin = async (req, res) => {
    console.log(req.body);
    const { name, username, email, password, password2, location } = req.body;
    const exists = await User.exists({
        $or: [{ username }, { email }],
    });
    if (exists) {
        return res.status(400).render('join', {
            pageTitle: 'Join',
            errorMessage: 'This username/email is already taken',
        });
    }
    if (password !== password2) {
        return res.status(400).render('join', {
            pageTitle: 'Join',
            errorMessage: 'Password confirmation does not match.',
        });
    }
    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
        return res.redirect('/login');
    } catch {
        return res.status(400).render('join', {
            pageTitle: 'Join',
            errorMessage: error._message,
        });
    }
};

const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' });
const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const pageTitle = 'Login';
    const user = await User.findOne({ username, socialOnly: false });
    if (!user) {
        return res.status(400).render('login', {
            pageTitle,
            errorMessage: 'An account with this username does not exists.',
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).render('login', {
            pageTitle,
            errorMessage: 'Wrong Password',
        });
    }
    // initialize Session => saveUninitialized : false
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect('/');
};

const startGithubLogin = (req, res) => {
    const baseUrl = `https://github.com/login/oauth/authorize`;
    const config = {
        client_id: process.env.GH_CLIENT,
        allow_signup: false,
        scope: 'read:user user:email',
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    console.log(finalUrl);
    return res.redirect(finalUrl);
};

const finishGithubLogin = async (req, res) => {
    const baseUrl = 'https://github.com/login/oauth/access_token';
    const config = {
        client_id: process.env.GH_CLIENT,
        client_secret: process.env.GH_SECRET,
        code: req.query.code,
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    console.log(finalUrl);
    const tokenRequest = await (
        await fetch(finalUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
        })
    ).json();
    if ('access_token' in tokenRequest) {
        // access api
        const { access_token } = tokenRequest;
        const apiUrl = 'https://api.github.com';
        const userData = await (
            await fetch(`${apiUrl}/user`, {
                headers: {
                    Authorization: `token ${access_token}`,
                },
            })
        ).json();
        console.log('userData', userData);
        const emailData = await (
            await fetch(`${apiUrl}/user/emails`, {
                headers: {
                    Authorization: `token ${access_token}`,
                },
            })
        ).json();
        const emailObj = emailData.find(
            (email) => email.primary === true && email.verified === true
        );
        console.log('emailObj', emailObj);
        if (!emailObj) {
            return res.redirect('/login');
        }
        let user = await User.findOne({ email: emailObj.email });
        if (!user) {
            user = await User.create({
                avatarUrl: userData.avatar_url,
                name: userData.name,
                username: userData.login,
                email: emailObj.email,
                password: '',
                location: userData.location,
                socialOnly: 'true',
            });
        }
        console.log('user', user);
        req.session.loggedIn = true;
        req.session.user = user;
        return res.redirect('/');
    } else {
        res.redirect('/login');
    }
};

const getEdit = (req, res) => {
    return res.render('edit-profile', { pageTitle: 'Edit Profile' });
};
const postEdit = async (req, res) => {
    console.log(req);
    const {
        session: {
            user: { _id },
        },
        body: { name, email, username, location },
        file,
    } = req;
    console.log(file);
    const updatedUser = await User.findByIdAndUpdate(
        _id,
        {
            name,
            email,
            username,
            location,
        },
        {
            new: true, // true: return new User, false: return old User
        }
    );
    req.session.user = updatedUser;
    return res.redirect('/users/edit');
};

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

const getChangePassword = (req, res) => {
    if (req.session.user.socialOnly === true) return res.redirect('/');
    return res.render('users/change-password', {
        pageTitle: 'Change Password',
    });
};
const postChangePassword = async (req, res) => {
    const {
        session: {
            user: { _id },
        },
        body: { oldPwd, newPwd, newPwdConfirm },
    } = req;
    const user = await User.findById(_id);

    const ok = await bcrypt.compare(oldPwd, user.password);
    if (!ok) {
        return res.status(400).render('users/change-password', {
            pageTitle: 'Change Password',
            errorMessage: 'The current password is incorrect',
        });
    }
    if (newPwd !== newPwdConfirm) {
        return res.status(400).render('users/change-password', {
            pageTitle: 'Change Password',
            errorMessage: 'The password does not match the confirmation',
        });
    }
    user.password = newPwd;
    await user.save();
    return res.redirect('/users/logout');
};

const see = (req, res) => res.send('See User');

export {
    getChangePassword,
    postChangePassword,
    getJoin,
    postJoin,
    getEdit,
    postEdit,
    getLogin,
    postLogin,
    logout,
    see,
    startGithubLogin,
    finishGithubLogin,
};
