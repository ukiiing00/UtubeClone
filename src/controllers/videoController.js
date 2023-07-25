let videos = [
    {
        title: 'First Video',
        rating: 5,
        comments: 2,
        createdAt: '2 minutes ago',
        views: 59,
        id: 1,
    },
    {
        title: 'Second Video',
        rating: 5,
        comments: 2,
        createdAt: '2 minutes ago',
        views: 59,
        id: 1,
    },
    {
        title: 'Third Video',
        rating: 5,
        comments: 2,
        createdAt: '2 minutes ago',
        views: 59,
        id: 1,
    },
];

const trending = (req, res) => {
    res.render('home', { pageTitle: 'Home', videos });
};
const see = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render('watch', { pageTitle: `Watch ${video.title}` });
};
const edit = (req, res) => res.render('edit');
const search = (req, res) => res.send('Search');
const upload = (req, res) => res.send('Upload');
const deleteVideo = (req, res) => {
    return res.send('Delete Video');
};

export default trending;
export { see, edit, search, deleteVideo, upload };
