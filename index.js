const PORT=4500;
import app from "./app.js";

import bodyParser from "body-parser";

app.use(bodyParser.json());



app.use("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:" i am working fine"
    })
})
app.listen(PORT,()=>
{
    console.log("Server is listening at port: "+PORT);
})  
 

 