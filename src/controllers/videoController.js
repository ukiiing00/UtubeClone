const trending = (req, res) => res.render('home', { pageTitle: 'Home' });
const see = (req, res) => res.render('watch', { pageTitle: 'Watch' });
const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
const search = (req, res) => res.send('Search');
const upload = (req, res) => res.send('Upload');
const deleteVideo = (req, res) => {
    return res.send('Delete Video');
};

export default trending;
export { see, edit, search, deleteVideo, upload };
