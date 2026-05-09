import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import transporter from "../config/mailer.js";

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

const emailService = async ()=>{
    try{
      const templatePath = path.join(__dirname, "../templates/backupEmail.html");
      const emailTemplate = await fs.promises.readFile(templatePath, "utf-8");
     
      // Define email options
      const mailOptions = {
        from: process.env.APP_EMAIL,
        to: "rvimal358@gmail.com",
        subject: "Backup Email Notification",
        html: emailTemplate
      };
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log("Email sent");
    }
    catch(err){
        console.error("Email sending failed :", err);
    }
}

export default emailService;