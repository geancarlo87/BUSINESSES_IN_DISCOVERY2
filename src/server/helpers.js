//indica el tiempo en el que se realizo un comentario o el ingreso de una imagen
const moment = require("moment");
const helpers = {};

helpers.timeago = timestamp => {
   return moment(timestamp).startOf("minute").fromNow();
};

module.exports = helpers;
