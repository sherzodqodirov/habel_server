import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./src/config/connectDb.js";

const app = express();
dotenv.config()
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.status(200).json({message: "Welcome to Node.js application backend."}))


await connectDB();

app.listen(PORT, () => {
    console.log(`server start ${PORT}`)
})
