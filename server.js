import express from "express"
import { connectDb } from "./Database/Connection.js";
import dotenv from 'dotenv';
import userRoute from "./Routes/Route.js"
import Taskroute from "./Routes/TaskRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors"


const app= express();
app.use(cors({
    origin:[process.env.FRONT_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
dotenv.config();
connectDb();

app.use(cookieParser())
app.use(express.json())
app.use("/user", userRoute);
app.use("/task",Taskroute );


app.listen(process.env.PORT, ()=>{
    console.log(`server is listening `)
})