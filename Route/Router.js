import express from "express";
const route=express.Router();
import  {signup,signin,getUser,logout,reset} from "../Controller/Controller.js"
import cookieUnpack from "../middleware/cookieUnpack.js"
import forgot from "../middleware/otpVerification.js"
import hotelSearch from "../Controller/hotelController.js" 
route.post('/signup',(req,res)=>{
    signup(req,res);
});
route.post('/signin',(req,res)=>{
    signin(req,res)
}); 
route.get("/getuser",cookieUnpack,getUser);
route.get("/logout",(req,res)=>{logout(req,res)});
route.post("/forgotPassword",forgot,reset)
route.get("/hotelSearch",hotelSearch)
 
export default route;  