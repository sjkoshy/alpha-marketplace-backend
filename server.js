import db from "./connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/api", routes);

db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    process.env.NODE_ENV === "production"
      ? console.log(`Express server application is running on port ${PORT}`)
      : console.log(
          `Express server running in development on: http://localhost:${PORT}`
        )
  );
});
