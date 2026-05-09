import express from "express";
import dotenv from "dotenv";
import "./config/cron.js";
import "./config/mailer.js";

dotenv.config();
const app = express();
const PORT= process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});