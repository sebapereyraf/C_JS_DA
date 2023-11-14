const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// Defino esquema para mi modelo

const posteosSchema = new mongoose.Schema({
    usuario: String,
    titulo: String,
    contenido: String,
    fecha: Date, 
    votos: { type: Number, default: 0 },
    id_temaPost: String,
    id_respuestaMadre: String, 
    //id_temaPost: {type: Schema.Types.ObjectId, ref: 'Posteos'},
    //id_respuestaMadre: {type: Schema.Types.ObjectId, ref: 'Posteos'}, 
  });
  
  // Crea el modelo
  module.exports = mongoose.model('Posteos', posteosSchema);

