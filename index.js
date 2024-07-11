import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import userRouter from "./routes/index.js"

dotenv.config()
const app = express();

try {
    await db.authenticate();
    console.log('Db Connect');
} catch (error) {
    console.log(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(userRouter);



app.listen(5000, () => {
    console.log('server running at port 5000');
})