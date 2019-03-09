// Relacionado con el "index.html".
// Este es el lado del Cliente.

var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// on = escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// emit = Enviar información, solo al servidor!
socket.emit('enviarMensaje', {
    usuario: 'Adrian Omodeo',
    mensaje: 'Favor permitir la conexión ... saludos!'
}, function(resp) {         // Esto es un CallBack
    console.log('respuesta server: ', resp);
});

// Escuchar información, que emite el servidor.
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});