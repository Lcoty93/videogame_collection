import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import gamesRoute from "./routes/gamesRoute.js";

dotenv.config();

const app = express();

// middleware for parsing json body
app.use(express.json());
// middlware for handling cors policy
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.use("/games", gamesRoute);



mongoose
    .connect(process.env.MONGODBURL)
    .then(() => {
        console.log("App is connected to database");

        app.listen(process.env.PORT, () => {
        console.log(`Server is running on PORT:${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.error(error);
    })