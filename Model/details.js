// import { text } from "body-parser";
import mongoose from "mongoose"
const {Schema} =mongoose;
const data= new mongoose.Schema({
      name:{
        type:String
      }
    , last:{
        type:String
    }
    , buy:{
        type:Number
    }
    , sell:{ type:Number}
    , volume:{ type:Number}
    , base_unit:{ type:String}
})

const details=mongoose.model("details",data); 
export default details; 