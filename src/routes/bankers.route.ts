import { Router } from "express";
import {
  getAllBankers,
  createBanker,
  getBanker,
  updateBanker,
  deleteBanker,
  connectBankerToClient,
} from "../controllers/banker.controller";

const bankerRoutes = Router();

bankerRoutes.route("/").get(getAllBankers).post(createBanker);
bankerRoutes
  .route("/:bankerId")
  .get(getBanker)
  .put(updateBanker)
  .delete(deleteBanker);
bankerRoutes.put("/:bankerId/client/:clientId", connectBankerToClient);

export default bankerRoutes;
