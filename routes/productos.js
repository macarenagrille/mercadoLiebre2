var express = require('express');
var router = express.Router();
const ProductosController = require('../controllers/productosController')


router.get('/detail/:id', ProductosController.detalle)

module.exports = router;