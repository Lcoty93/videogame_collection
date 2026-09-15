import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
    },
        console: {
        type: String,
        required: true,
    },
        reason: {
        type: String,
        maxlength: 500,
    },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
    },

    },
    {
        timestamps: true,
    }
)

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;