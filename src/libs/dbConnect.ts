import { DataSource } from "typeorm";

export const dbConnect = async () => {
  try {
    const connection = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "typeorm",
    });
    await connection.initialize();
    console.log("Database connected successfully.");
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};
