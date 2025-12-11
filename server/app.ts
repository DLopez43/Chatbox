import express, { urlencoded,  Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { DBconnection, DBdisconnect } from "./utils/database";
import chatRoute from "./routes/chatRoute";
import { createServer } from "http";
import { Server } from "socket.io";
import signUpRoute from "./routes/signUpRoute";

dotenv.config();
//setting up express app
const app = express();
// wrap express app in a httpserver to attach to the socket.io socket
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173","http://0.0.0.0:5173"],
    methods: ["GET", "POST"],
    credentials: true, 
    allowedHeaders: ["*"]
  }
})


await DBconnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on("connection", (socket) => {
  console.log("✅ user connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  })
})



app.set("io", io);

app.get("/ping", (req, res) => {
  console.log("Hit the endpoint");
  res.status(200).send("Henlo");
});

app.use("/signup", signUpRoute)
app.use("/messages", chatRoute);
app.use("/", chatRoute);

// set up socket events 
// all express routes should work the same... i hope


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

const PORT = process.env.PORT || 3000;
console.log("Port from env:", process.env.PORT)

httpServer.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
