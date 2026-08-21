import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import gamesRoute from "./routes/gamesRoute.js";

dotenv.config();

const __dirname =path.resolve()

const app = express();

// middleware for parsing json body
app.use(express.json());

if(process.env.NODE_ENV !== "production") {
    // middlware for handling cors policy
    app.use(cors());
}


app.use("/games", gamesRoute);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
})
}

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