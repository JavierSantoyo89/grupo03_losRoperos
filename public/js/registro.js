window.addEventListener('load',function(){
    let campoNombre = document.querySelector('#name');

    campoNombre.addEventListener("focus",function(){
        campoNombre.style.backgroundColor = 'pink'
    })
})