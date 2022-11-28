import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js"
import connect from "./config/db.js";

dotenv.config();
connect()

const app = express()
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("API is running!!!")
})

app.use('/api/users', userRoutes)

app.listen(port, console.log(`Server running on port ${port}...`))