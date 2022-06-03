import { Router } from "express";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClient,
  updateClient,
} from "../controllers/client.controller";

const clientRouter = Router();

clientRouter.route("/").get(getAllClients).post(createClient);
clientRouter
  .route("/clientId")
  .get(getClient)
  .put(updateClient)
  .delete(deleteClient);

export default clientRouter;
