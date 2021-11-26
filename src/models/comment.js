//para obtener información de las comentarios, datos de importancia 
const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");
const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({
    image_id: {type: ObjectId },
    email: {type: String},
    name: {type: String},
    gravatar: {type: String},
    comment: {type: String},
    timestamp:{type: Date, default: Date.now}
});

module.exports = model("comment", commentSchema);