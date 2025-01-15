import express from "express";
const app = express();

import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import stockRoute from "./routes/stock.route.js";
import './cronJobs/stockCron.js';
import path from "path";
const __dirname = path.resolve()

dotenv.config({});

import 'dotenv/config';



const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/api/v1/user", userRoute);
app.use("/api/v1/stocks", stockRoute);


const PORT = process.env.PORT || 10000;

const server = http.createServer(app);

// Configure server timeouts
server.keepAliveTimeout = 120000; // 2 minutes
server.headersTimeout = 120000;  // 2 minutes

// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
    });
}


