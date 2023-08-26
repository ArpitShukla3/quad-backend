import mongoose from "mongoose";
const {Schema}=mongoose;
import bcrypt from "bcrypt";
const userSchema=new Schema({
    name: {type:String, required: [true, "name is required"],minLength:[3,"name must be greater than 2"],maxLength:[20,"name must be less than 20"]},
    password:{type:String, required:true},
    mobile:{ type: Number, min : 1000000000, max : 9999999999, unique:true,required:true},
    email:{type: String,trim:true, unique:true,required:true},
    Bookings:{
        type:Object
    }},
    {
        timestamps:true
    }
    );
    userSchema.pre('save',async function(next)
    {
        if(!this.isModified('password'))
        {
                 next();
        }
            this.password= await bcrypt.hash(this.password,10);
            next();
    });
const userModel=mongoose.model("userDetails",userSchema);
export default   userModel;