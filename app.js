// ------- Require's dependencies ------- //
const express = require('express');
const app = express();
const  path = require('path');

// ------- Para poder usar metodo PUT & DELETE ------- //
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
 //app.use(methodOverride('_method'))

// ------- Cadena para llamar middlewares ------- //
        var logMiddleware = require('./middlewares/logmiddleware');
        app.use(logMiddleware);

// ------- Template engine ------- //
app.set('view engine', 'ejs');

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ------- Variables de rutas ------- //
const routes = require('./routers/main');
const routerProduct = require('./routers/products');
const routerUser = require('./routers/users');

app.use('/',routes);
app.use('/product',routerProduct);
app.use('/user',routerUser);

// ------- Cadena de ruta para error 404 ------- //
app.use((req,res,next)=>{
    res.status(404).render('not-found')
})

// ------- levantar servidor ------- //
app.listen(1689,()=>{
    console.log('Servidor funcionando en http://localhost:1689');
});


/* Sitios funcionales
http://localhost:1689                  // Vista home //
http://localhost:1689/user/login       // Vista login //
http://localhost:1689/user/register    // Vista registro //
http://localhost:1689/product/add      // Vista agregar productos //
*/

/* Sitios a reparar
http://localhost:1689/product/2
http://localhost:1689/product/1
*/