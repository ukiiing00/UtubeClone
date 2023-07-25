const trending = (req, res) => res.render('home');
const see = (req, res) => res.render('watch');
const edit = (req, res) => {
    return res.send('Edit');
};
const search = (req, res) => res.send('Search');
const upload = (req, res) => res.send('Upload');
const deleteVideo = (req, res) => {
    return res.send('Delete Video');
};

export default trending;
export { see, edit, search, deleteVideo, upload };
