import express from "express";

import Videogame from "../models/gamesModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const videogames = await Videogame.find({});
        res.status(200).json(videogames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const videogame = await Videogame.create(req.body);
        res.status(201).json(videogame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const videogame = await Videogame.findById(req.params.id);
        if(!videogame) {
            return res.status(404).json({ message: "Videogame not found."});
        }
        res.status(200).json(videogame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

router.put("/:id", async (req, res) => {
    try {
        const videogame = await Videogame.findByIdAndUpdate(req.params.id,
            req.body,
            {
                returnDocument: 'after',
                runValidators: true,
            }
        );

        if(!videogame) {
            return res.status(404).json({ message: "Videogame not found."});
        }
        res.status(200).json(videogame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const videogame = await Videogame.findByIdAndDelete(req.params.id);
        if(!videogame) {
            return res.status(404).json({ message: "Videogame not found."});
        }
        res.status(200).json({ message: "Videogame was deleted successfully."});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

export default router;