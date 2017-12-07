"use strict";

const grandprix = require('../models').grandprix;

exports.list = function (req, res) { 
  grandprix.findAll().then(grandprix => {
    res.jsonp(grandprix);
  });
};

exports.create = function (req, res) {
  res.jsonp(grandprix.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  grandprix.findById(id).then(grandprix => {
    res.jsonp(grandprix);
  });
};