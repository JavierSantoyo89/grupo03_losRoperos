// ------- Require's dependencies ------- //
const express = require('express');
const app = express();
const  path = require('path');

// ------- Template engine ------- //
app.set('view engine', 'ejs');

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ------- Variables de rutas ------- //
const routes = require('./routers/main');
const routerDetalle = require('./routers/products');
const routerLogin = require('./routers/login');

app.use('/',routes);
app.use('/search', routes);
app.use('/detalle',routerDetalle);
app.use('/login',routerLogin);


// ------- levantar servidor ------- //
app.listen(1689,()=>{
    console.log('Servidor funcionando en http://localhost:1689');
});


