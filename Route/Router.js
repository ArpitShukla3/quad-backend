import express from "express";
const route=express.Router();
import  {signup,signin} from "../Controller/Controller.js"


route.post('/signup',(req,res)=>{
    signup(req,res);
});
route.post('/signin',(req,res)=>{
    signin(req,res)
})


 
export default route; 