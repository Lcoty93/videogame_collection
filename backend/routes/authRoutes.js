import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "../models/admin.js";

import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({
            username,
        })

        if(!admin) {
            return res.status(401).json({
                message: "Invalid credentials",
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            admin.password
        )

        if(!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
            })
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                adminId: admin._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        )

        // Return the token
        return res.status(200).json({
            token,
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Server error",
        })
        
    }
})

router.get("/verify", protectAdmin, (req, res) => {
    return res.status(200).json({
        message: "Admin authenication successful.",
        adminId: req.adminId
    })
})

export default router;