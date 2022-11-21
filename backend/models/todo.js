const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    text: {type: String, require: true}
},
    {timestamps: true}
)

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = Todo