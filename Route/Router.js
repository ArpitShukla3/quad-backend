import express from "express";
const route=express.Router();
import  signup from "../Controller/Controller.js"


route.post('/signup',(req,res)=>{
    signup(req,res);
});



 
export default route; 