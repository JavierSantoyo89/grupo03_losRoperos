const express = require('express');
const app = express();

app.use(  express.static(__dirname + '/public'));
app.listen(8000,()=>{
    console.log('Servidor funcionando');

});


app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html' )
    
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html' )
    
});
app.get('/login.html', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html' )
    
});
app.get('/register.html', (req,res)=>{
    res.sendFile(__dirname + '/views/resgister.html' )
    
});
app.get('/product.html', (req,res)=>{
    res.sendFile(__dirname + '/views/product.html' )
    
});