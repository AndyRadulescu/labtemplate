"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  });
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
