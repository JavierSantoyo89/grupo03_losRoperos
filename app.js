// ------- Require's dependencies ------- //
const express = require('express');
const app = express();
const  path = require('path');
const session = require('express-session');
let tbl = require('./data/models/product')


// ------- Para poder usar metodo PUT & DELETE ------- //
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
app.use(methodOverride('_method'));

// ------- Cadena para llamar middlewares ------- //
        var logMiddleware = require('./middlewares/logmiddleware');
        app.use(logMiddleware);
        app.use(session({secret: 'Secreto!!!'})); // para iniciar session

// ------- Template engine ------- //
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static(__dirname + '/public'));

// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON

// ------- Variables de rutas ------- //
const routes = require('./routers/main');
const routerProduct = require('./routers/products');
const routerUser = require('./routers/users');
const { log } = require('console');
app.use('/',routes);
app.use('/products',routerProduct);
app.use('/user',routerUser);

// ------- Cadena de ruta para error 404 ------- //
app.use((req,res,next)=>{
    res.status(404).render('not-found')
})

// ------- levantar servidor ------- //
app.listen(1689,()=>{
    console.log('Servidor funcionando en http://localhost:1689');

});

/*

Estructura del sitio
    Home:
        /                               // Vista home //
        /search                         // Vista busqueda //
        /carrito                        // Vista de carrito de compras //
        /privacidad                     // Vista de politica de privacidad //
        /tiendas                        // Vista de tiendas donde se habla de franquisias
        /contacto                       // Contacto de todos para contrataciones
        /faq                            // Preguntas comnes
        /invite                         // invitar a conocernos
        /nosotros                       // Historia de la tienda(NO de nosotros los programadores)
    
    User:
        /user/login                 // Vista login //
        /user/register             // Vista registro //
  
    Product:
        /product/[id]               // Vista detalle de x's producto //
        /product/newproduct         // Vista agregar productos //
        /product/update/[id]        // Vista para actualizar x's producto //
        /product/delete/[id]        // Borra registro de x's producto //

*/