import express from "express";
import User from "../model/UserModel"
import { Request, Response, NextFunction } from "express"; 
import { UserController} from "../controller/UserController";


const Route = express.Router();

Route.post("/", UserController.createUser, (req: Request,res: Response,next: NextFunction) => { 
    return res.status(200).json(res.locals.newUser)
})

Route.get("/", UserController.getAllUsers, (req: Request,res: Response,next: NextFunction) => { 
    return res.status(200).json(res.locals.newUser)
})

// create get and post routes for messages as well -- MANNY 


export default Route;