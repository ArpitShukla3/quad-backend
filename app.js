import express from "express";
const app=express();
import route from "./Route/Router.js"
import cors from "cors";
import dataBaseConnect from "./config/dataBaseConnection.js"
dataBaseConnect();
app.use(express.json());

import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(cors());
app.use("/",route);




export default app;