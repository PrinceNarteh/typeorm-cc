import express from "express";
import { dbConnect } from "./libs/dbConnect";
import clientRouter from "./routes/clients.router";

const main = async () => {
  // connecting to database
  await dbConnect();

  //   initializing express instance
  const app = express();

  // adding middleware
  app.use(express.json());

  app.use("/clients", clientRouter);

  app.listen(4000, async () => {
    console.log("Server listening on port 4000");
  });
};

main();
