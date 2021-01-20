import express from "express";
import clientRouter from "./clientRouter.js";
import resourcesRouter from "./api/v1/resourcesRouter.js"
const rootRouter = new express.Router(); //place your server-side routes here

rootRouter.use("/api/v1/resources", resourcesRouter);
rootRouter.use("/", clientRouter);

export default rootRouter;
