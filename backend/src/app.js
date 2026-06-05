import express from "express";
import {createServer} from "node:http";

import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended:true}));

app.use("/api/v1/users",userRoutes);


const start = async()=>{
    try{
        const connectionDb = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to MongoDB: ${connectionDb.connection.host}`);
    
    server.listen(app.get("port"),()=>{
        console.log("Server is running on port 8000");
    });
    }catch(Err){
        console.log("Error connecting to MongoDB:", Err);
    }
}

start();
