import express from "express";

import Suggestion from "../models/suggestion.js";
import Videogame from "../models/gamesModel.js";
import protectAdmin from "../middleware/authMiddleware.js";

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

router.post("/:id/approve", protectAdmin, async (req, res) => {
    try {
        const suggestion = await Suggestion.findById(req.params.id);

        if(!suggestion) {
            return res.status(404).json({
                message: "suggestion not found",
            })
        }

        const newVideoGame = new Videogame({
            title: suggestion.title,
            platform: suggestion.platform,
            console: suggestion.console,
            played: false,
            rating: 0,
        })

        const savedVideoGame = await newVideoGame.save();

        await Suggestion.findByIdAndDelete(req.params.id);

        res.status(201).json({
            message: "Suggestion approved",
            videoGame: savedVideoGame,
        })
    } catch (error) {
        console.log("Error approving suggestion:", error);

        res.status(500).json({
            message: "Unable to approve suggestion",
            error: error.message,
        })
    }
})

router.delete("/:id", protectAdmin, async (req, res) => {
    try {
        const deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id);

        if(!deletedSuggestion) {
            return res.status(404).json({
                message: "Suggestion not found",
            })
        }

        res.status(200).json({
            message: "Suggestion denied and deleted",
        })
    } catch (error) {
        console.error("Error denying suggestion:", error);

        res.status(500).json({
            message: "Unable to deny suggestion",
            error: error.message,
        })
    }
})

router.get("/", protectAdmin, async (req, res) => {
    try {
        const suggestion = await Suggestion.find({});
        res.status(200).json(suggestion);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
})

export default router;