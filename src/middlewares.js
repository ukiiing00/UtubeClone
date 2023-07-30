const localsMiddleware = (req, res, next) => {
    // console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = 'Utube'; // global variables
    res.locals.loggedInUser = req.session.user || {};
    console.log(res.locals);
    next();
};

export { localsMiddleware };
