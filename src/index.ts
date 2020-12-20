import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { config, dbConfig } from './config';
import app from './server/app';
import Server from './server/server';

const server = new Server(app);
server.connectDb(createConnection, dbConfig);

server.start(config.port);
