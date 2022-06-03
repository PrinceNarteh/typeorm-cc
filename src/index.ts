import express from "express";
import { dbConnect } from "./libs/dbConnect";

const main = async () => {
  // connecting to database
  await dbConnect();

  //   initializing express instance
  const app = express();

  app.listen(4000, async () => {
    console.log("Server listening on port 4000");
  });
};

main();
