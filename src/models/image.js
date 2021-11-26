//para obtener información de las imagenes, datos de importancia 
const mongoose = require("mongoose");
const {Schema} = mongoose;
const path = require("path");

const ImageSchema = new Schema({
    title:{type: String},
    description:{type: String},
    filename:{type:String},
    views: {type: Number, desfault: 0},
    likes: {type: Number, desfault: 0},
    timestamp:{type: Date, default: Date.now}
});

ImageSchema.virtual("uniqueId")
    .get(function(){
        return this.filename.replace(path.extname(this.filename), "")
    })

module.exports = mongoose.model("image", ImageSchema);