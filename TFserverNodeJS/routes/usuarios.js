const express = require("express");

const usuariosController = require('../controllers/usuarios_controllers');

const router = express.Router();

//router.get('/', posteosController.getPosteos); 

router.post('/registro', usuariosController.createUsuarios); //ruta tipo post para crear usuario

router.post('/login', usuariosController.loginUser); // ruta tipo post para loguearse

router.get('/logout', usuariosController.logoutUser); // ruta tipo get para salir de la sesion

router.get('/getUser', usuariosController.getSession);

module.exports = router;