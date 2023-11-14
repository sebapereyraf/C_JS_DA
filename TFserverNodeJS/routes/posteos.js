const express = require("express");

const posteosController = require('../controllers/posteos_controllers');

const router = express.Router();

router.get('/', posteosController.getPosteos); 

router.get('/:id', posteosController.getPosteosID);

router.post('/', posteosController.createPosteo); //post

module.exports = router;


