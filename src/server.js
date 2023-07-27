/*
    express things
    server configuration file 
*/

import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';

const app = express();
const logger = morgan('dev'); // morgan() has 5 options

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views'); // current working directory
app.set('x-powered-by', false);

// middleware
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
