//*****************************Forma de crear un servidor haciendo uso de Experss************************/

const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require('body-parser'); // es un middleware ?? que se utiliza para analizar el body de solicitud JSON

const session = require('express-session');


mongoose.connect('mongodb://127.0.0.1:27017/curso', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Conexión a MongoDB exitosa');
   })
   .catch(error => {
      console.error('Error de conexión a MongoDB:', error);
   });


app.use(cors());

/*
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, // habilita el intercambio de cookies a través de las solicitudes de diferentes dominios
}));
*/


app.use(bodyParser.json()); // Usa body-parser para analizar solicitudes JSON

//Configuraciones para el modulo de sessiones
app.use(session({
  secret: 'clave_secreta+DebeSerCompleja2750paraGarantizarSeguridad', // Se utiliza para firmar la sesión y darle seguridad.
  resave: false,
  saveUninitialized: false,
  
}));


const posteosRoutes = require('./routes/posteos');
const usuariosRoutes = require ('./routes/usuarios');

app.use('/posteos', posteosRoutes);
app.use('/usuarios', usuariosRoutes)


////////


app.get('/', (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;
  res.send( `Numero de visitas a la pagina${req.session.cuenta}`)
  console.log(req.session.user);
  //res.send('¡Hola, Express!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});

