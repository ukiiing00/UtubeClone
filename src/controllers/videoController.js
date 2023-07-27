import Video from '../models/Video';

const home = async (req, res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render('home', { pageTitle: 'Home', videos });
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

const postUpload = async (req, res) => {
    // here we will add a video to the videos array
    const { title, description, hashtags } = req.body;
    await Video.create({
        title,
        description,
        createdAt: Date.now(),
        meta: {
            views: 0,
            rating: 0,
        },
        hashtags: hashtags.split(',').map((word) => `#${word}`),
    });
    return res.redirect('/');
};

export default home;
export { watch, getEdit, postEdit, getUpload, postUpload };
