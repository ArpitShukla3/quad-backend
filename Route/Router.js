import express from "express";
const route=express.Router();
import {databaseSetData,sendData} from "../Controller/Controller.js"
route.get("/show",databaseSetData,sendData);
export default route;   