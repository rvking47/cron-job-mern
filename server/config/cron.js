import cron from "node-cron";
import backupService from "../services/backupService.js";

cron.schedule("* * * * *", async () => {
    await backupService();
})