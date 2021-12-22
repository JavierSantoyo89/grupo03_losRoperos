// ------- Require's dependencies ------- //
const express = require('express');
const app = express();
const  path = require('path');

// ------- Template engine ------- //
app.set('view engine', 'ejs');

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static(__dirname + '/public'));

// ------- Variables de rutas ------- //
const routes = require('./routers/main');
const routersDetail = require('./routers/products');

app.use('/',routes);
app.use('/detail',routersDetail);

// ------- levantar servidor ------- //
app.listen(1689,()=>{
    console.log('Servidor funcionando en http://localhost:1689');
});


