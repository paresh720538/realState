import express from "express";
import morgan from "morgan";
import cors from "cors";
import { DATABASE } from "./config.js";
import mongoose  from "mongoose";

import authRoute from './routes/Auth.js';

const app = express();


// database
mongoose
.connect(DATABASE) 
.then(()=> console.log("database is connected"))
.catch((err)=> console.log(err)); 

// Middlewares 
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Routes middleware
app.use('/api',authRoute); 


app.listen(8000,()=>{
    console.log("app is listen at the port 8000");
})


  
