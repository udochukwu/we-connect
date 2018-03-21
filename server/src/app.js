import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Router from './routes/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan('dev'));


const PORT = process.env.PORT || 3000;

app.use('/api/v1', Router);

app.listen(PORT, () => console.log('server listening on port 3000'));

module.exports = app;
