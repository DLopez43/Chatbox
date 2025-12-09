import Message from "../model/MessageModel";
import { Request, Response, NextFunction  } from "express";


export const MessageController = { 
    createMessage: async(req:Request, res: Response, next: NextFunction) => { 
        try{
            const { message } = req.body;
            const newMessage = await Message.create(
                {
                 message,   
                }
            ) 
            res.locals.newMessage = newMessage; 
            return next();
        }catch(err){
             return next({
        log: `Something went wrong adding a new message`,
        status: 500,
        message: { error: `An Issue Occured Creating A New Message.` },
      });

        }
    }, 

    getAllMessages: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { message } = req.body; 

            const existingMessage = Message.findOne({
                message: message
            }); 

            res.locals.message = existingMessage;
            return next()
        } catch (err) {
            return next({
                log: "error getting messages", 
                status: 400,
                message: {err: "error in getMessages middleware"}
            }); 
        }
    }
}
