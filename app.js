import express from "express";
const app=express();
import route from "./Route/Router.js"
import dataBaseConnect from "./config/dataBaseConnection.js"
import cookieParse from "cookie-parser";
dataBaseConnect();
app.use(express.json());
app.use(cookieParse());

app.use("/",function(req,res){
    route
});







export default app;