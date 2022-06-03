import { Client } from "../entities/Client";
import { DataSource } from "typeorm";
import { Banker } from "../entities/Banker";

export const dbConnect = async () => {
  try {
    const connection = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "typeorm",
      entities: [Banker, Client],
      synchronize: true,
    });
    await connection.initialize();
    console.log("Database connected successfully.");
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};
