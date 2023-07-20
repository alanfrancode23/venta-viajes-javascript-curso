//Importar los objetos de JS desde otro archivo.
import { barcelona, roma, paris, londres } from './ciudades.js'

//Obtener elementos del dom
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un evento de click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
            // Remover activo
        });

        //Agregar la clase  "active" al enlace actual
        this.classList.add('active')

        // Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //Mostrar el contenido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}





