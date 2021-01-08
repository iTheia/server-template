import express, { Request, Response } from "express";
import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { join } from "path";
import { corsConfig, env } from "../config";
import { router } from "../routes";
import next from "next";

const publicPath = join(__dirname, "../../", "public/images");

export async function createApp() {
    try {
        const app = express();
        const nextApp = next({ dev: env === "development" });
        const handle = nextApp.getRequestHandler();
        await nextApp.prepare();
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use(cookieParser());
        app.use(helmet());
        app.use(cors(corsConfig));
        app.use("/images", express.static(publicPath));
        app.use("/api/v1", router);
        app.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        return app;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
