import express from "express";

import Resource from "../../../models/Resource.js"

const resourcesRouter = new express.Router();

resourcesRouter.get("/", async (req, res) => {
  const resources = await Resource.query()
  return res.status(200).json({ resources })
})

resourcesRouter.get("/:id", async (req,res) => {
  console.log(req.params.id)
  const resource = await Resource.query().findById(req.params.id)
  return res.status(200).json({ resource })
})


export default resourcesRouter;
