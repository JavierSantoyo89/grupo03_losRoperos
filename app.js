// ------- Require's dependencies ------- //
const express = require('express');
const app = express();
const  path = require('path');


// ------- Cadena para llamar middlewares ------- //
        var logMiddleware = require('./middlewares/logmiddleware');
        app.use(logMiddleware);

// ------- Template engine ------- //
app.set('view engine', 'ejs');

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ------- Para poder usar metodo PUT & DELETE ------- //
    //const methodOverride = require('method-override');
    //app.use(methodOverride('_method'))


// ------- Variables de rutas ------- //
const routes = require('./routers/main');
const routerDetalle = require('./routers/products');
const routerLogin = require('./routers/login');
const routerUsers=require('./routers/users');

app.use('/',routes);
app.use('/search', routes);
app.use('/detalle',routerDetalle);
app.use('/login',routerLogin);
app.use('/registro',routerUsers);

// ------- Cadena de ruta para error 404 ------- //
app.use((req,res,next)=>{
    res.status(404).render('not-found')
})


// ------- levantar servidor ------- //
app.listen(1689,()=>{
    console.log('Servidor funcionando en http://localhost:1689');
});


