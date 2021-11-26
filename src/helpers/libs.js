//usado para poder añadirles un número aleatorio a las imagenes
const helpers = {};

helpers.randomNumber=()=>{
    const possible = "abcdefghijkmnopqrstuvwxyz0123456789";
    let randomNumber = 0;
    for (let i=0; i<6; i++){
        randomNumber += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randonmNumber;
};

module.exports = helpers;