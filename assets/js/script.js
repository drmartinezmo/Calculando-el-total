var cantidadProducto = 0;
var total = 0;
var botonSumar = document.querySelector('#sumar');
var botonRestar = document.querySelector('#restar');
var base = document.querySelector("#base").innerHTML;

botonSumar.addEventListener('click', function () {
    cantidadProducto = cantidadProducto + 1;
    document.querySelector('#cantidad').innerHTML = cantidadProducto;
    document.querySelector('#total').innerHTML = cantidadProducto * base;
});

botonRestar.addEventListener('click', function () {
    cantidadProducto = cantidadProducto - 1;
    document.querySelector('#cantidad').innerHTML = cantidadProducto;
    document.querySelector('#total').innerHTML = cantidadProducto * base;
});