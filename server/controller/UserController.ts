import User from "../model/UserModel.ts"
import {Request, Response, NextFunction} from "express";

export const UserController = {
    createUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username } = req.body;
            const existingUser = await User.findOne({username}); 

            if(existingUser){ return res.status(400).json(`Couldn't create this username.`)}
            
            const newUser = await User.create({
                username,
            }); 

            console.log("succesfully added: " + username); 

            res.locals.username = newUser; 
            return next(); 
        } catch (err) {
            return next({
                log: "error adding user into DB", 
                status: 404, 
                message: {err: "error in create User middleware"}
            })
        }
    }, 

    getAllUsers: async (req: Request, res: Response, next : NextFunction) => {
        try{
            const findUsers = await User.find();
            res.locals.findUser = findUsers;
            return next()
        }catch(err) {
            return next ({
                log: `Something went wrong finding users.`,
                status: 500,
                message: {error: `Issue located in getAllUsers.`}

            })

        }
        
    }
}