import bodyParser from "body-parser";
import express from "express";
import route from "./Route/Router.js"
import cors from "cors";
import dataBaseConnect from "./config/dataBaseConnection.js"
dataBaseConnect();
const app=express();
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(cors());
app.use("/show",route);
app.use("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"i am working"
    })
})

app.listen(process.env.PORT,()=>
{
    console.log("Server is listening at port: "+process.env.PORT);
})  
 

 