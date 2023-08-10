import mongoose from "mongoose";
import chalk from "chalk";

const connectionString =
  process.env.DB_URL || "mongodb://localhost:27017/alpha-marketplace";

mongoose.connect(connectionString).catch((err) => {
  console.log(chalk.red.bold(`Error connecting to MongoDB: ${err.message}`));
});

mongoose.connection.on("connected", () => {
  console.log(
    chalk.green.bold(
      `Connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}`
    )
  );
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.yellow.bold("Disconnected from MongoDB"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red.bold(`MongoDB connection error: ${err.message}`));
});

export default mongoose.connection;
