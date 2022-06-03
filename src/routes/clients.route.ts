import { Router } from "express";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClient,
  updateClient,
} from "../controllers/client.controller";

const clientRoutes = Router();

clientRoutes.route("/").get(getAllClients).post(createClient);
clientRoutes
  .route("/clientId")
  .get(getClient)
  .put(updateClient)
  .delete(deleteClient);

export default clientRoutes;
