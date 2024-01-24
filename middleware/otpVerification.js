//gorgot section start here
//@ send otp to email
//@ start timer 
//@ compare otp than modify password
import otpGenerator from "otp-generator"
import sendmail from "sendmail"
import ValidateEmail, { validate } from "email-validator"
 const forgot=async(req,res)=>{
       const {email,password,confirmPassword}=req.body;
       if(!password||!confirmPassword||!email)
       {
              return res.status(400).json({
                     success:false,
                     message:"all fields are compulsory"
                     })    
       }
       if(password!=confirmPassword)
       {
              return res.status(400).json({
                     success:false,
                     message:"confirm password and password do not match"
                     })
       }
       //verifying email
      const valid=await ValidateEmail(email);
      if(!valid)
      {
        return res.status(400).json({
            success:false,
            message:"enter valid email"
            })
      }
       //sending otp process
       const options={
        digits:true
 }
  const otp= otpGenerator.generate(5,options);
   //@ email sent state
 
  await sendmail({
    from: 'no-reply@yourdomain.com',
    to: email,
    subject: 'OTP verification',
    html: 'Enter otp:  '+otp,
  }, function(err, reply) {
       if(err)
    {
       return res.status(400).json({
              success:false,
              message:"error occurred in sending mail due to error : "+err.message
       })
    }
    console.dir(reply);
   });

   if(otp==req.otp)
   {
     next();  
   }
}


export default forgot;