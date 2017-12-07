var express = require('express');
var router = express.Router();
var team = require('../service/').team;

router.get('/', team.list);
router.get('/:id', team.findById);
router.post('/', team.create);
//router.delete('/',team.delete);

module.exports = router;