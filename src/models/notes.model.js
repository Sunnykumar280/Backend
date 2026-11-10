const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})
//jab bahut sare notes bnayenge toh isiliye noteModel m rakh denge
const noteModel = mongoose.model("notes", noteSchema)
module.exports = noteModel