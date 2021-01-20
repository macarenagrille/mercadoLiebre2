var express = require('express');
var router = express.Router();
const {index} = require('../controllers/indexController')
//destructuring ej{index, jgfgf, nkhfh} para no escribir tanto

router.get('/', index)

module.exports = router;
