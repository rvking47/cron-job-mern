import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import emailService from "./emailService.js";

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

const sourceDir = path.join(__dirname, "../data");
const backupDir = path.join(__dirname, "../backups");

const backupService = async()=>{
    try{
        const timestamp = new Date().toISOString().replace(/[:.]/g,"-"); 
        const destination = path.join(backupDir, `backup-${timestamp}`);

        await fs.promises.cp(sourceDir, destination, {recursive: true});
        await emailService();
        console.log(`Backup created at ${destination}`);
    }
    catch(err){
        console.error("Backup failed :", err);
    }
}

export default backupService;