import express from "express";
import cors from 'cors';
import "dotenv/config";
import { getCars } from "./api/mongo.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/cars", async (req, res, next) => {
  try {
    const cars = await getCars();
    res.json(cars);
  } catch (error) {
    console.error("failed to retrieve cars", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(process.env.PORT, () => {
  console.log("Server running in port: ", process.env.PORT);
});
