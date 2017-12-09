"use strict";

const user = require('../models').user;

exports.list = function (req, res, next) {
  user.findAll({
    where: req.query,
    include: [{ all: true }]
  }).then(user => {
    res
      .jsonp(user)  
  }).catch(next);
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  user.findById(id).then(user => {
    res.jsonp(user);
  });
};

// exports.delte = function(req,res){
//   user.delteAll();
// }
