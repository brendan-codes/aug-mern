const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Your song name must be two characters!"]
    },
    artist: {
        type: String,
        required: true,
        minlength: [2, "Your song name must be two characters!"]
    }
}, {timestamps: true})

mongoose.model("Song", SongSchema);