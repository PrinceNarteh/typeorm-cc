import { Router } from "express";
import {
  createClient,
  createTransaction,
  deleteClient,
  getAllClients,
  getClient,
  updateClient,
} from "../controllers/client.controller";

const clientRoutes = Router();

clientRoutes.route("/").get(getAllClients).post(createClient);
clientRoutes.post("/:clientId/transaction", createTransaction);
clientRoutes
  .route("/:clientId")
  .get(getClient)
  .put(updateClient)
  .delete(deleteClient);

export default clientRoutes;
