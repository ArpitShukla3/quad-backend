import userModule from "../Model/userSchema.js";
import hotelModel from "../Model/hotelSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import cookieParser from "cookie-parser";
dotenv.config();




const signup=async (req,res)=>{
    const{ name, email, password, confirmPassword} = req.body;
    if(!name || !email || !password ||!confirmPassword)
       {
              return res.status(400).json({
                     success:false,
                     data: "all field are compulsory"
              })
       }
       const emailValid=emailValidator.validate(email);
       if(!emailValid)
       {
              return res.status(400).json({
                     success:false,
                     data: "enter correct email id"
              }) 
       }
       if(password!=confirmPassword)
       {
              return res.status(400).json({
                     success:false,
                     data: "password !=confirm Password"
              }) 
       }
       try{
        const userInfo=new userModule(req.body);
        const result=await userInfo.save();
        //options for jwt token
        const tokenOptions={
            expiresIn:"20 days"
        };
        //creating cookie and storing data in token
        const token=await jwt.JsonWebTokenError({email:email,password:password},process.env.SECRET,tokenOptions);
         //loading up token in cookie
        const cookieOption={
            maxAge:20*24*60*60*1000
        };
        res.cookie("token",token,cookieOption);
        return res.status(200).json({
               success: true,
               data: result,
              })
          }
          catch(error) 
          {
                if(error.code==11000)
                {
                 res.status(400).json({
                        success: false,
                        message: "account already exists with this email id"
                 })
                }
                return res.status(400).json({
                 success: false,
                 message: error.message
                })
          }
};

export default {signup};