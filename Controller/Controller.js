import dotenv from "dotenv";
dotenv.config();
import bodyParser  from "body-parser";
import details from "../Model/details.js"
//**************************************************************************************************************** */
export const databaseSetData=async(req,res,next)=>
{      
       try {
       const url="https://api.wazirx.com/api/v2/tickers";
       const response =await fetch(url,
       { method: 'GET',
       headers: {
           'Accept': 'application/json',
       },});
       const data=await response.json();
       await details.deleteMany();
       const arr=Object.values(data)
       //adding data in database
       arr.forEach(async (element) => {
              const atom={
                     name:element.name
                    ,last:element.last
                    , buy:element.buy
                        , sell:element.sell
                        , volume:element.volume
                        , base_unit:element.base_unit
              }
              const userInfo=await details(element);
              await userInfo.save();   
       });
     
       next();
       } catch (error) {
               return res.status(402).json({
                     message:error.message 
               })
       }
}
export const sendData=async(req,res)=>
{
    const data=await details.find().limit(10);
    return res.status(200).json({
       data:data
    })
}