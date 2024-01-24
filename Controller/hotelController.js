import hotelModel from "../Model/hotelSchema.js";





const hotelSearch=async(req,res)=>{
    const city=req.body.city;
    const skip=req.body.skip;
    const limit=req.body.limit;
    const results=await hotelModel.find({Address: {$regex: city,$options:"i"}}).skip(skip).limit(limit).exec();
    console.log(results);
    return res.status(200).json({
        success:true,
        message:results,
        
    })
}
export default hotelSearch;