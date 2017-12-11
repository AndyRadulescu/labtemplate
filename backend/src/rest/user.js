var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:id', user.findById);
//router.get('/:id/comments', user.findComments);
router.post('/', user.create);
router.delete('/:id', user.delete);
router.put('/:id', user.addNewPassword);

module.exports = router;
