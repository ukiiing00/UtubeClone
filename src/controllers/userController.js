import User from '../models/User';

const getJoin = (req, res) =>
    res.render('join', { pageTitle: 'Create Account' });
const postJoin = async (req, res) => {
    console.log(req.body);
    const { name, username, email, password, password2, location } = req.body;
    const exists = await User.exists({
        $or: [{ username }, { email }],
    });
    if (exists) {
        return res.render('join', {
            pageTitle: 'Join',
            errorMessage: 'This username/email is already taken',
        });
    }
    if (password !== password2) {
        return res.render('join', {
            pageTitle: 'Join',
            errorMessage: 'Password confirmation does not match.',
        });
    }

    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    res.redirect('login');
};
const edit = (req, res) => res.send('Edit User');
const remove = (req, res) => res.send('Remove User');
const login = (req, res) => res.send('Login');
const logout = (req, res) => res.send('Log out');
const see = (req, res) => res.send('See');

export { getJoin, postJoin, edit, remove, login, logout, see };
