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
        return res.redirect('/login');
    }
};

const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        return res.redirect('/');
    }
};

export const uploadFiles = multer({
    dest: 'uploads/',
});

export { localsMiddleware, protectorMiddleware, publicOnlyMiddleware };
