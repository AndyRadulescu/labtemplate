var express = require('express');
var router = express.Router();
var ticket = require('../service/').ticket;

router.get('/', ticket.list);
router.get('/:id', ticket.findById);
router.post('/', ticket.create);
//router.delete('/',ticket.delete);

module.exports = router;