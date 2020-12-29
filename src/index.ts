import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { config, dbConfig } from './config';
import { app } from './server/app';
import { HTTPServer } from './server/server';
import SocketIo from './services/SocketIo';

const httpServer = new HTTPServer(app);
httpServer.connectDb(createConnection, dbConfig);

SocketIo(httpServer.server);

httpServer.start(config.port);
