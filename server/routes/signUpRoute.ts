import express from "express";
import { Request, Response, NextFunction } from "express"; 
import SignUpController from "../controller/SignUpController";


const Route = express.Router();

Route.post("/", SignUpController.createUser, (req: Request,res: Response,next: NextFunction) => {
    return res.status(200).json(res.locals.newUser)
})

Route.get("/:username", SignUpController.getOneUser, (req: Request,res: Response,next: NextFunction) => { 
    return res.status(200).json(res.locals.findOneUser)
})


export default Route;