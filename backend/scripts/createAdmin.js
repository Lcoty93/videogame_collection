import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/admin.js";

dotenv.config();

const createAdmin = async () => {
    try {
        const username = process.env.ADMIN_USERNAME;
        const password = process.env.ADMIN_PASSWORD;

        if(!username || !password) {
            throw new Error("ADMIN_USERNAME and ADMIN_PASSWORD must be defined in .env");
        }

        await mongoose.connect(process.env.MONGODBURL);
        console.log("Connected to MongoDB")

        const existingAdmin = await Admin.findOne({ username })

        if(existingAdmin) {
            console.log("An admin with that username already exists.");
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await Admin.create({
            username,
            password: hashedPassword,
        })
        
        console.log("Admin account created successfully.")
    } catch (error) {
        console.error("Unable to create admin:" + error.message);
    } finally {
        await mongoose.connection.close();
    }
}

createAdmin();