import Video from '../models/Video';

const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render('home', { pageTitle: 'Home', videos });
};
const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) return res.render('404', { pageTitle: 'Video not found' });
    return res.render('watch', { pageTitle: video.title, video });
};
const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) return res.render('404', { pageTitle: 'Video not found' });
    return res.render('edit', { pageTitle: `Edit ${video.title}`, video });
};
const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({ _id: id });
    if (!video) return res.render('404', { pageTitle: 'Video not found' });
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: hashtags
            .split(',')
            .map((word) => (word.startsWith('#') ? word : `#${word}`)),
    });
    return res.redirect(`/videos/${id}`);
};
const getUpload = (req, res) => {
    return res.render('upload', { pageTitle: `Upload Video` });
};

const postUpload = async (req, res) => {
    // here we will add a video to the videos array
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags,
        });
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.render('upload', {
            pageTitle: `Upload Video`,
            errorMessage: error._message,
        });
    }
};

export default home;
export { watch, getEdit, postEdit, getUpload, postUpload };
