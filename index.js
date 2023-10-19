import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoutes from "./routes/ProductRoutes.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoutes);

app.listen(PORT, () => {
  console.log("Server up and running with port " + PORT);
});
