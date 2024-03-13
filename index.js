const express = require("express");
//const socket = require("socket.io");

//const io = socket(server);

// Conectar al servidor de Socket.io
const io = require('socket.io-client');
// Conectar al servidor de Socket.io
const socket = io('http://localhost:5000'); // Asegúrate de cambiar la URL según tu servidor

// Manejar eventos de mensajes del servidor
socket.on('mensaje', (mensaje) => {
  console.log('Mensaje recibido:', mensaje);
});

// Enviar un mensaje al servidor
socket.emit('message', '¡Hola desde el cliente112!');

// Manejar desconexiones del servidor
socket.on('disconnect', () => {
  console.log('Desconectado del servidor');
});

