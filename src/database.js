//indicaciones de las url de las base de datos, nos indica que si estamos conectados con el servidor
const mongoose = require("mongoose");

const {database}=require("./keys");

mongoose.connect(database.URI,{
    useNewUrlParser:true
})
    .then(db=> console.log("DB is connected"))
    .catch(err=> console.error(err));