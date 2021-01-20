import express from "express";

import { Resource } from "../../../models/index.js"
import ResourceSerializer from "../../../serializers/ResourceSerializer.js"

const resourcesRouter = new express.Router();

resourcesRouter.get("/", async (req, res) => {
  const resources = await Resource.query()
  const serializedResources = resources.map(resource => ResourceSerializer.getSummary(resource))

  return res.status(200).json({ resources: serializedResources })
})

resourcesRouter.get("/:id", async (req,res) => {
  try {
    const resource = await Resource.query().findById(req.params.id).throwIfNotFound()
    const serializedResource = ResourceSerializer.getDetails(resource)
    return res.status(200).json({ resource: serializedResource })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

export default resourcesRouter;
