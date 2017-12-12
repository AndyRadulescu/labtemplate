var express = require('express');
var router = express.Router();
var comments = require('../service/').comments;

router.get('/', comments.list);
router.get('/:id', comments.findById);
router.get('/:id/user', comments.findUser);
router.post('/', comments.create);
router.delete('/:id', comments.delete);
router.put('/:id', comments.updateComment);

module.exports = router;