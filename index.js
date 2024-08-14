import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});