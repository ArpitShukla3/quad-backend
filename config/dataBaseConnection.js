import mongoose from "mongoose";
// const HotelUrl=process.env.HotelUrl; //will be used later
const Url="mongodb://127.0.0.1:27017/Data?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3";
// const UserUrl=process.env.UserUrl;
const UserUrl="mongodb://127.0.0.1:27017/Data?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3";
async function dataBaseConnect(){
     //connecting with hotel database
    await mongoose.connect(Url)
    .then((conn)=>{console.log("connected to  database"+conn.connection.host)})
    .catch((err)=>{console.log("failed to connect with  database"+err)});
      
    //connecting with user database
    // await mongoose.connect(UserUrl)
    // .then((conn)=>{console.log("connected to user database"+conn.connection.host)})
    // .catch((err)=>{console.log("failed to connect with user database"+err)});
}

dataBaseConnect();
// module.exports=dataBaseConnect;
export default dataBaseConnect;