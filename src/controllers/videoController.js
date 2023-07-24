const trending = (req, res) => res.send('Home Page Video');
const see = (req, res) => {
    console.log(req.params);
    return res.send(`Watch Video #${req.params.id}`);
};
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
