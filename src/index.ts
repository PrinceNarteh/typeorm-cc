import express from "express";
import { dbConnect } from "./libs/dbConnect";
import bankerRoutes from "./routes/bankers.route";
import clientRoutes from "./routes/clients.route";

const main = async () => {
  // connecting to database
  await dbConnect();

  //   initializing express instance
  const app = express();

  // adding middleware
  app.use(express.json());

  // routes
  app.use("/api/clients", clientRoutes);
  app.use("/api/bankers", bankerRoutes);

  app.listen(4000, async () => {
    console.log("Server listening on port 4000");
  });
};

main();
