import "reflect-metadata";
import { createConnection } from "typeorm";
import { config, dbConfig } from "./config";
import { createApp } from "./http/app";
import { HTTPServer } from "./http/server";

(async function () {
    try {
        const httpServer = new HTTPServer(await createApp());

        httpServer.connectDb(createConnection, dbConfig);

        httpServer.start(config.port);
    } catch (error) {
        console.log(error);
    }
})();
