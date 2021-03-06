import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import { getEverything, getEverythingFromDB } from "./everythingController";
const everythingRouter = express.Router();

everythingRouter.post("/", getEverythingFromDB);
everythingRouter.post("/gateway", getEverything);
everythingRouter.use("/graph", graphsRouter);
export default everythingRouter;
