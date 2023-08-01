/*
    express things
    server configuration file 
*/
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';
import rootRouter from './routers/rootRouter';
import { localsMiddleware } from './middlewares';
import MongoStore from 'connect-mongo';

const app = express();
const logger = morgan('dev'); // morgan() has 5 options

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views'); // current working directory
app.set('x-powered-by', false);

// middleware
app.use(logger);
app.use(express.urlencoded({ extended: true }));

//session
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false, // only login user
        cookie: {
            // maxAge: 20000, expired
        },
        store: MongoStore.create({
            mongoUrl: process.env.DB_URL,
        }),
    })
);

// app.use((req, res, next) => {
//     console.log(req.headers);
//     next();
// });

app.use(localsMiddleware);

app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});

// Router
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('assets'));
app.use('/', rootRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
