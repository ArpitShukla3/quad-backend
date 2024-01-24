import express from "express";
const route=express.Router();
import {databaseSetData,sendData} from "../Controller/Controller.js"
route.get("/",databaseSetData,sendData);
export default route;   