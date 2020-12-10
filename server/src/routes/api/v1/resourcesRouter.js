import express from "express";

import Resource from "../../../models/Resource.js"

const resourcesRouter = new express.Router();

resourcesRouter.get("/", async (req, res) => {
  const resources = await Resource.query()
  return res.status(200).json({ resources })
})


export default resourcesRouter;
