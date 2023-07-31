import User from '../models/User';
import Video from '../models/Video';

const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render('home', { pageTitle: 'Home', videos });
};
const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    const owner = await User.findById(video.owner);
    if (!video)
        return res.status(404).render('404', { pageTitle: 'Video not found' });
    return res.render('watch', { pageTitle: video.title, video, owner });
};
const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video)
        return res.status(404).render('404', { pageTitle: 'Video not found' });
    return res.render('edit', { pageTitle: `Edit ${video.title}`, video });
};
const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({ _id: id });
    if (!video)
        return res.status(404).render('404', { pageTitle: 'Video not found' });
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
};
const getUpload = (req, res) => {
    return res.render('upload', { pageTitle: `Upload Video` });
};

const postUpload = async (req, res) => {
    const {
        session: {
            user: { _id },
        },
        file: { path: fileUrl },
        // here we will add a video to the videos array
        body: { title, description, hashtags },
    } = req;
    try {
        await Video.create({
            title,
            description,
            hashtags: Video.formatHashtags(hashtags),
            fileUrl,
            owner: _id,
        });
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.status(400).render('upload', {
            pageTitle: `Upload Video`,
            errorMessage: error._message,
        });
    }
};

const deleteVideo = async (req, res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect('/');
};

const search = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if (keyword) {
        videos = await Video.find({
            title: {
                $regex: new RegExp(`^${keyword}`, 'i'),
            },
        });
    }
    return res.render('search', { pageTitle: 'Search', videos });
};

export default home;
export { watch, getEdit, postEdit, getUpload, postUpload, deleteVideo, search };
