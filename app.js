const express = require('express');
const app = express();

const routes = require('./routers/main');

app.use(  express.static(__dirname + '/public'));

app.use('/',routes);


app.listen(3000,()=>{
    console.log('Servidor funcionando')

});


