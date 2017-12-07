var express = require('express');
var router = express.Router();
var grandprix = require('../service/').grandprix;

router.get('/', grandprix.list);
router.get('/:id', grandprix.findById);
router.post('/', grandprix.create);
//router.delete('/',grandprix.delete);

module.exports = router;