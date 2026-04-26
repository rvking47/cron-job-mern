# 📦 Cron Job Backup System (MERN)

This project is a simple **Node.js-based automated backup system** using `node-cron`. It periodically copies data from a source folder and stores it in a backup directory with a timestamp.

---

## 🚀 Features

* ⏱️ Automated backups using cron jobs
* 📁 Recursive folder copy
* 🕒 Timestamp-based backup naming
* ⚙️ Environment variable support
* 🌐 Express server for running the app

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* node-cron
* fs (File System)
* dotenv

---

## 📂 Project Structure

```
cron-job-mern/
│
├── data/            # Source folder (files to backup)
├── backups/         # Backup storage folder
├── app.js           # Main server file
├── .env             # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rvking47/cron-job-mern.git
cd cron-job-mern
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` file

```
PORT=5000
```

---

### 4️⃣ Run the server

```bash
node app.js
```

---

## ⏰ Cron Job Configuration

```js
cron.schedule("* * * * *", async () => {
```

👉 This runs **every minute**

### Cron Format:

```
* * * * *
│ │ │ │ │
│ │ │ │ └── Day of week
│ │ │ └──── Month
│ │ └────── Day of month
│ └──────── Hour
└────────── Minute
```

---

## 📁 Backup Logic

* Source folder: `data/`
* Backup folder: `backups/`
* Each backup is saved with a unique timestamp:

```
backup-2026-04-26T08-25-40
```

---

## ⚠️ Important Notes

* Make sure `data/` folder exists before running
* `backups/` folder will be created automatically if not present
* Uses `fs.cp()` with recursive option

---

## 🐞 Error Handling

* Logs error if backup fails
* Logs success message with backup path

---

## 📌 Example Output

```
Backup created at E:\cron job\server\backups\backup-2026-04-26T08-25-40
```

---

## 🔮 Future Improvements

* Add compression (ZIP backups)
* Upload backups to cloud (AWS S3, Google Drive)
* Add backup cleanup (auto delete old backups)
* Add API endpoints to trigger manual backup

---

## 👨‍💻 Author

**Rahul Vimal**

---

## 📜 License

This project is open-source and free to use.
