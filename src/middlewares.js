import multer from 'multer';

const localsMiddleware = (req, res, next) => {
    // console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = 'Utube'; // global variables
    res.locals.loggedInUser = req.session.user || {};
    console.log(res.locals);
    next();
};

const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    } else {
        req.flash('error', 'Log in first');
        return res.redirect('/login');
    }
};

const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        req.flash('error', 'Not authorized');
        return res.redirect('/');
    }
};

export const avatarUpload = multer({
    dest: 'uploads/avatars/',
    limits: {
        fileSize: 3000000,
    },
});

export const videoUpload = multer({
    dest: 'uploads/videos/',
    limits: {
        fileSize: 10000000,
    },
});

export { localsMiddleware, protectorMiddleware, publicOnlyMiddleware };
