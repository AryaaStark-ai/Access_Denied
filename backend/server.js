import express from "express";
import { PORT } from "./constants.js";
import connectDB from "./DB/database.connect.js";
import router from "./routes/router.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";

connectDB();
const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).send("<h1>Server is running</h1>");
});

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
