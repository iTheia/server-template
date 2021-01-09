import { Router } from "express";
import {
    closeSession,
    getCurrentSession,
    loginController,
    registerController,
} from "./controller";

export const mobileRoutes = Router();

mobileRoutes.post("/login", loginController);
mobileRoutes.post("/signup", registerController);
mobileRoutes.get("/close", closeSession);
mobileRoutes.get("/current", getCurrentSession);
