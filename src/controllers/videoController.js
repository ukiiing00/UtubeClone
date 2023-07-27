const home = (req, res) => {
    res.render('home', { pageTitle: 'Home' });
};
const watch = (req, res) => {
    const { id } = req.params;
    return res.render('watch', { pageTitle: `Watch` });
};
const getEdit = (req, res) => {
    const { id } = req.params;
    res.render('edit', { pageTitle: `Editing:` });
};
const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body; // javascript representation
    return res.redirect(`/videos/${id}`);
};

const getUpload = (req, res) => {
    return res.render('upload', { pageTitle: `Upload Video` });
};

const postUpload = (req, res) => {
    // here we will add a video to the videos array
    const { title } = req.body;

    return res.redirect('/');
};

export default home;
export { watch, getEdit, postEdit, getUpload, postUpload };
