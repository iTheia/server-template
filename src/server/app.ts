import express from 'express';
import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { join } from 'path';
import { corsConfig } from '../config';
import { router } from './routes';

export const app = express();

const publicPath = join(__dirname, '../../', 'public');

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsConfig));
app.use(express.static(publicPath));
app.use('/', express.static(publicPath));
app.use('/api/v1', router);
