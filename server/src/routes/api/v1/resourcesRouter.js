import express from "express";

import { Resource } from "../../../models/index.js"

const resourcesRouter = new express.Router();

resourcesRouter.get("/", async (req, res) => {
  const resources = await Resource.query()
  return res.status(200).json({ resources })
})

resourcesRouter.get("/:id", async (req,res) => {
  try {
    const resource = await Resource.query().findById(req.params.id).throwIfNotFound()
    return res.status(200).json({ resource })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

export default resourcesRouter;
