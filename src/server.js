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
        secret: 'Hello!',
        resave: true,
        saveUninitialized: true,
    })
);

// app.use((req, res, next) => {
//     console.log(req.headers);
//     next();
// });

app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});

app.get('/add-one', (req, res, next) => {
    req.session.tomato += 1;
    return res.send(`${req.session.id} ${req.session.tomato}`);
});

// Router
app.use('/', rootRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
