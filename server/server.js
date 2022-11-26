import express from "express";
import dotenv from "dotenv";

import users from "./data/users.js";
import connect from "./config/db.js";

dotenv.config();
connect()

const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send("API is running!!!")
})

app.get("/api/users", (req, res) => {
    res.send(users)
})

app.listen(port, console.log(`Server running on port ${port}...`))