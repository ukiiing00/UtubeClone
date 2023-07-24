const join = (req, res) => res.send('Join');
const edit = (req, res) => res.send('Edit User');
const remove = (req, res) => res.send('Remove User');
const login = (req, res) => res.send('Login');
const logout = (req, res) => res.send('Log out');
const see = (req, res) => res.send('See');

export { join, edit, remove, login, logout, see };
