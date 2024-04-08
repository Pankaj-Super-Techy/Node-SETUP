// require('dotenv').config({path:'./.env'});
import dotenv from "dotenv" ;
import connectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({
    path : './.env',
})
const PORT = process.env.PORT || 8000;
connectDB().then(async () => { 
    console.log("Database Connected");
    app.listen(PORT ,()=>{
        console.log("Server started on port " + PORT);
    })
}
).catch((err) =>{console.error(err)});
