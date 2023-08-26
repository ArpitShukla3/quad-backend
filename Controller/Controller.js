import userModel from "../Model/userSchema.js";
import hotelModel from "../Model/hotelSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import emailValidator from "email-validator";
import cookieParser from "cookie-parser";
dotenv.config();




export const signup=async (req,res)=>{
    const{ name, email, password, confirmPassword,mobile} = req.body;
    if(!name || !email || !password ||!confirmPassword||!mobile)
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
       //seraching mobile phone in database and throwing error in case is user already exits
       const foundItem = await userModel.findOne({email});
       if (foundItem) {
          return res.status(400).json({
              success:false,
              message:"user exists"
          })
       }
       try{
       
        const userInfo=new userModel(req.body);
        const result=await userInfo.save(); 
        //options for jwt token
        const tokenOptions={
            expiresIn:"20 days"
        };
        //creating cookie and storing data in token
        const token=await jwt.sign({email:email,password:password},process.env.SECRET,tokenOptions);
         //loading up token in cookie
        const cookieOption={
            maxAge:20*24*60*60*1000
        };
        res.cookie("token",token,cookieOption);
        return res.status(200).json({
               success: true,
               data: "result is here"
              })
          }
          catch(err) 
          {
                return res.status(400).json({
                 success: false,
                 message: "error occureed in try block" +err.message
                })
          }
}; 
 

//Sign in section
export const signin=async(req, res)=>{
       try{
              const {email ,password }=req.body;
              if(!email || !password)
              {
                     return res.status(500).json({
                            succes:false,
                            message: "enter email and password"
                           })  
              }
              if(!emailValidator.validate(email))
              {
                     return res.status(500).json({
                            succes:false,
                            message: "enter correct email"
                           })    
              }
              const user=await userModel.findOne({email}).select('+password');
              // const payload={email: user.email, };
              if(!user||(await bcrypt.compare(user.password,password )))
              {
                     return res.status(500).json({
                            succes:true,
                            message: "Enter correct credentials"
                           }) 
              }
                const token=jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: '180000000000s' });;
                user.password=undefined;
                const cookieOption={
                maxAge:20*24*60*60*1000,
                };
               res.cookie("token",token,cookieOption);
               res.status(200).json({ 
                success:true,
                 data:user   
                });
}
      catch(error){
       res.status(400).json({
              success: false,
              reason_of_failure: ""+error
       })
     } 
}
// export default {signup, signin};