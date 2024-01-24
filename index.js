const PORT=4500;
import app from "./app.js";

import bodyParser from "body-parser";

app.use(bodyParser.json());



app.listen(PORT,()=>
{
    console.log("Server is listening at port: "+PORT);
})  
 

 