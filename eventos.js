document.addEventListener('DOMContentLoaded', function() {

var miDiv = document.getElementById("miDiv");

miDiv.addEventListener("click", function() {
    alert("¡Hola! Soy el div");
});

var miBoton = document.getElementById("miBoton");

miBoton.addEventListener ("click", function (event){
    alert ("¡Hola!");
    event.stopPropagation();
});
    
});
