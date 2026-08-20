import mongoose from "mongoose";

const videogameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    console: {
        type: String,
        required: true,
    },
    played: {
        type: Boolean,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
    }
},
{
    timestamps: true, //createdAt updatedAt
})

const Videogame = mongoose.model('Videogame', videogameSchema);

export default Videogame;