const Posteos = require('../models/posteos_models');

module.exports = {
getPosteos: async (req, res)=>{
    try {
      const posteos = await Posteos.find();
      res.json(posteos);
    } catch (error) {
        console.error('Error al obtener los elementos:', error);
        res.status(500).json({message: 'Error interno del servidor'})
    }
  },

  
  createPosteo: async (req, res) => {
    try {
      // Obtengo los datos JSON del cuerpo de la solicitud
      const { usuario, titulo, contenido, fecha, id_temaPost, id_respuestaMadre } = req.body;

      // Creao un nuevo objeto en la base de datos
      const nuevoPosteo = new Posteos({
        usuario,
        titulo,
        contenido,
        fecha,
        id_temaPost,
        id_respuestaMadre,
      });

      // Guardo el nuevo objeto en la base de datos
      await nuevoPosteo.save();

      res.status(201).json({ message: 'Elemento creado con éxito' });
    } catch (error) {
      console.error('Error al crear el elemento:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },  

////////////// Codigo para probar modificando el getPosteoID anterior  /////

  getPosteosID: async (req, res) => {
    try {
      const { id } = req.params; // Cambiado de req.body a req.params
      console.log(req.params);
  
      // Buscar posteos que cumplan al menos una de las dos condiciones
      const posteoRaizId = await Posteos.find({
        _id: id,
      });

      const posteoRespuestasId = await Posteos.find({
        id_temaPost: id,
      });
      
      const posteos = [];

      posteos.push(posteoRaizId, posteoRespuestasId);
      
  
      if (!posteos || posteos.length === 0) {
        return res.status(404).json({ message: 'No existen posteos con el ID solicitado' });
      }
  
      res.json(posteos);
      
      //res.status(201).json({ message: 'Existen Posteos con el ID consultado' });
    } catch (error) {
      console.error('Error al obtener los elementos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
  
  
};


