import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { DBconnection, DBdisconnect } from "./utils/database";

dotenv.config();
//setting up express app
const app = express();
const PORT = process.env.PORT || 3000;
console.log("Port from env:", process.env.PORT)
const MONGO_URI = process.env.MONGO_URI;

console.log("before");
await DBconnection();
console.log("after");

app.use(
  cors(
    {
    origin: "http://localhost:5173",
    credentials: true,
  }
)
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hit the endpoint");
  res.status(200).send("Henlo");
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
