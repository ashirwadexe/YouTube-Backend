import express from "express";
import { connectDB } from "./db/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    connectDB();
    console.log(`App listening on PORT: ${PORT}`);
});