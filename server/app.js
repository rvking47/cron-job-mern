import express from "express";
import cron from "node-cron";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

const sourceDir = path.join(__dirname, "data");
const backupDir = path.join(__dirname, "backups");

dotenv.config();
const app = express();

const PORT= process.env.PORT;

cron.schedule("* * * * *", async()=>{
    try{
        const timestamp = new Date().toISOString().replace(/[:.]/g,"-"); //2026-04-26T08-25-40
        const destination = path.join(backupDir, `backup-${timestamp}`);

        await fs.cp(sourceDir, destination, {recursive: true},(err)=>{
            if(err){
              console.error("Backup failed :", err);
            }
            else{
              console.log(`Backup created at ${destination}`);
            }
        });
    }
    catch(err){
        console.error("Backup failed :", err);
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});