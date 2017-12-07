var express = require('express');
var router = express.Router();
var comments = require('../service/').comments;

router.get('/', comments.list);
router.get('/:id', comments.findById);
router.post('/', comments.create);
//router.delete('/',comments.delete);

module.exports = router;