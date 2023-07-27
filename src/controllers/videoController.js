import { error } from 'firebase-functions/logger';
import Video from '../models/Video';

const home = async (req, res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render('home', { pageTitle: 'Home', videos });
};
const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    console.log(video);
    return res.render('watch', { pageTitle: video.title, video });
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
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(',').map((word) => `#${word}`),
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
