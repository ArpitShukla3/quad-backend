import jwt from "jsonwebtoken"
const cookieUnpack=(req,res,next)=>{
   const token=req.cookies &&req.cookies.token || null
   if(!token)
   {
    return res.status(400).json({
        success:false,
        message:"not authorized"
    })
   }
   try {
     const decoded=jwt.verify(token,process.env.SECRET);
      req.user={email:decoded.email,password:decoded.password};
     }
    catch (error) {
    return res.status(400).json({
        success:false,
        message:"error in middleware of cookieUnpack, error: "+error.message
    })
   } 
   next();
}
export default cookieUnpack;