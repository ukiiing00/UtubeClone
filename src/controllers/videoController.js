const trending = (req, res) => {
    const videos = [
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
