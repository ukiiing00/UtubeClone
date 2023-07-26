let videos = [
    {
        title: 'First Video',
        rating: 5,
        comments: 2,
        createdAt: '2 minutes ago',
        views: 1,
        id: 1,
    },
    {
        title: 'Second Video',
        rating: 5,
        comments: 2,
        createdAt: '2 minutes ago',
        views: 59,
        id: 2,
    },
    {
        title: 'Third Video',
        rating: 5,
        comments: 2,
        createdAt: '2 minutes ago',
        views: 59,
        id: 3,
    },
];

const trending = (req, res) => {
    res.render('home', { pageTitle: 'Home', videos });
};
const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render('watch', { pageTitle: `Watch ${video.title}`, video });
};
const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render('edit', { pageTitle: `Editing: ${video.title}`, video });
};
const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body; // javascript representation
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};

const getUpload = (req, res) => {
    return res.render('upload', { pageTitle: `Upload Video` });
};

const postUpload = (req, res) => {
    // here we will add a video to the videos array
    const { title } = req.body;
    const newVideo = {
        title: title,
        rating: 0,
        comments: 0,
        createdAt: 'just now',
        views: 0,
        id: videos.length + 1,
    };
    videos.push(newVideo);
    return res.redirect('/');
};

export default trending;
export { watch, getEdit, postEdit, getUpload, postUpload };
