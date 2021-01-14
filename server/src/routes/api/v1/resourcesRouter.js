import express from "express";

import Resource from "../../../models/Resource.js"

const resourcesRouter = new express.Router();

resourcesRouter.get("/", async (req, res) => {
  const resources = await Resource.query()
  const serializedResources = resources.map(resource => ResourceSerializer.getSummary(resource))

  return res.status(200).json({ resources: serializedResources })
})


export default resourcesRouter;
