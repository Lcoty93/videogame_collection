import express from "express";

import Suggestion from "../models/suggestion.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { title, console, reason } = req.body;

        if(!title || !console) {
            return res.status(400).json({
                message: "Title and console are required.",
            })
        };

        const newSuggestion = await Suggestion.create({
            title,
            console,
            reason,
        });

        return res.status(201).json({
            message: "Suggestion submitted successfully.",
            suggestion: newSuggestion,
        });
    } catch (error) {
        console.error("Error creating suggestion:" + error);

        return res.status(500).json({
            message: "Unable to submit suggestion."
        })
    }
})

export default router;