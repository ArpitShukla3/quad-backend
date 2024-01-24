import mongoose from "mongoose";
async function dataBaseConnect(){
     //connecting with hotel database
    await mongoose.connect(process.env.Url)
    .then((conn)=>{console.log("connected to  database"+conn.connection.host)})
    .catch((err)=>{console.log("failed to connect with  database"+err)});
}
dataBaseConnect();
// module.exports=dataBaseConnect;
export default dataBaseConnect;