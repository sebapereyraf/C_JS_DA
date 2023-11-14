const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// Defino esquema para mi modelo

const usuariosSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    edad: Number,
    email: String,
    ciudad: String,
    provincia: String,
    pais: String,
    usuario: String,
    password: String,
    rol: {type: String, default: "user"},
    
    });
  
  // Crea el modelo
  module.exports = mongoose.model('usuarios', usuariosSchema);