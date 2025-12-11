import User from "../model/UserModel";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";

const SignUpController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;

      const userCheck = await User.findOne({ username });

      if (userCheck) {
        alert("Username cannot be created.");
        return res.status(400).json({ message: "Username cannot be created." });
      }

      const passwordHashed = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        password: passwordHashed,
      });

      res.locals.newUser = newUser;
      return next();
    } catch (error: unknown) {
      return next({
        log: `Something went wrong adding a new user`,
        status: 500,
        message: { error: `An Issue Occured Creating Your Account.` },
      });
    }
  },

  getOneUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;
      const findOneUser = await User.findOne({username});
      if(!findOneUser){
        return next(
        {
          log:`Something went wrong getting that user.`,
          status: 404,
          message:{ error : `Error occured in GetOneUser`}
          
        });
    }

      res.locals.findOneUser = findOneUser;

      return next();
    } catch (error: unknown) {
      return next({
        log: `Something went wrong finding User`,
        status: 500,
        message: { error: `Sorry, we cannot find those User.` },
      });
    }
  },
};

export default SignUpController;
