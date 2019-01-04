var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/descarga.jpg') {
        miImage.setAttribute('src', 'images/descarga1.jpg');
    } else {
        miImage.setAttribute('src', 'images/descarga.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
}
