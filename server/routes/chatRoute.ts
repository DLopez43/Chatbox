import express from "express";
import { Request, Response, NextFunction } from "express"; 
import { UserController} from "../controller/UserController";
import { MessageController } from "../controller/MessageController";


const Route = express.Router();

Route.post("/users", UserController.createUser, (req: Request,res: Response,next: NextFunction) => {
    return res.status(200).json(res.locals.username)
})

Route.get("/users", UserController.getAllUsers, (req: Request,res: Response,next: NextFunction) => { 
    return res.status(200).json(res.locals.findUser)
})

Route.get("/messages", MessageController.getAllMessages, (req: Request,res: Response,next: NextFunction) => { 
    return res.status(200).json(res.locals.messages)
})

Route.post("/messages", MessageController.createMessage, (req: Request,res: Response,next: NextFunction) => { 
    return res.status(200).json(res.locals.newMessage)
})


// create get and post routes for messages as well -- MANNY 


export default Route;