import express from "express";
const route=express.Router();
import  {signup,signin,getUser} from "../Controller/Controller.js"
import cookieUnpack from "../middleware/cookieUnpack.js"

route.post('/signup',(req,res)=>{
    signup(req,res);
});
route.post('/signin',(req,res)=>{
    signin(req,res)
}); 
route.get("/getuser",cookieUnpack,getUser);


 
export default route; 