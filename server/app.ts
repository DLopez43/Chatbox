import express, { urlencoded,  Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { DBconnection, DBdisconnect } from "./utils/database";

dotenv.config();
//setting up express app
const app = express();
const PORT = process.env.PORT || 3000;
console.log("Port from env:", process.env.PORT)
// const MONGO_URI = process.env.MONGO_URI;

await DBconnection();


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

app.get("/ping", (req, res) => {
  console.log("Hit the endpoint");
  res.status(200).send("Henlo");
});

app.use((req, res, next) => {
  res.status(404).json({err: "unknown route"})
})

app.use((err: any, req: Request, res : Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
