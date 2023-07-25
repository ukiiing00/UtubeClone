const trending = (req, res) => {
    const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    res.render('home', { pageTitle: 'Home', videos });
};
const see = (req, res) => res.render('watch', { pageTitle: 'Watch' });
const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
const search = (req, res) => res.send('Search');
const upload = (req, res) => res.send('Upload');
const deleteVideo = (req, res) => {
    return res.send('Delete Video');
};

export default trending;
export { see, edit, search, deleteVideo, upload };
