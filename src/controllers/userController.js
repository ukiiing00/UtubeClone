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
        res.redirect('login');
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
    const user = await User.findOne({ username });
    const ok = await bcrypt.compare(password, user.password);
    if (!user) {
        return res.status(400).render('login', {
            pageTitle,
            errorMessage: 'An account with this username does not exists.',
        });
    } else if (!ok) {
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
const edit = (req, res) => res.send('Edit User');
const remove = (req, res) => res.send('Remove User');
const logout = (req, res) => res.send('Log out');
const see = (req, res) => res.send('See');

export { getJoin, postJoin, edit, remove, getLogin, postLogin, logout, see };
