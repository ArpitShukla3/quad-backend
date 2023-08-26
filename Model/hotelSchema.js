import mongoose from "mongoose";
const {Schema}=mongoose;
const hotelSchema=new Schema({
    name:{type:String, required:true }
    ,Address:{type:String, required:true}
    ,facilities:{type:String}
    ,email:{type:String,trim:true}
    ,Mobile:{type:Number,required:true}
    ,geoLocation:{type:String}
    ,Price:{
        type:[Number],
        min:[0]
    }
    ,Left:{
        type:[Number],
        min:[0]
    }
});
   
const hotelModel=mongoose.model("hotelDetails",hotelSchema);
export default hotelModel; 