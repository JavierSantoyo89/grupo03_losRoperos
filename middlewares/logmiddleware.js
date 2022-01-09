const { time } = require('console');
const fs = require('fs');

//! ---------- middleware que registra el acceso global a un sitio de nuestra web ---------- // 

function logMiddLeware (req, res, next){
    let now = new Date();
       //console.log('hasta aqui jala, por el momento...'+ now);
       fs.appendFileSync('logLosRoperos.txt', 'Visito: ' + req.url + ' ' + now  + '\n');
    next();
}

module.exports = logMiddLeware;