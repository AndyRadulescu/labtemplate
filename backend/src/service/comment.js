"use strict";

const comments = require('../models').comment;

exports.list = function (req, res) {
  comments.findAll().then(comments => {
    res.jsonp(comments);
  });
};

exports.create = function (req, res) {
  res.jsonp(comments.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  comments.findById(id).then(comments => {
    res.jsonp(comments);
  });
};