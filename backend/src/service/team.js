"use strict";

const team = require('../models').team;

exports.list = function (req, res) {
  team.findAll().then(team => {
    res.jsonp(team);
  });
};

exports.create = function (req, res) {
  res.jsonp(team.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  team.findById(id).then(team => {
    res.jsonp(team);
  });
};