"use strict";

const ticket = require('../models').ticket;

exports.list = function (req, res) {
  ticket.findAll().then(ticket => {
    res.jsonp(ticket);
  });
};

exports.create = function (req, res) {
  res.jsonp(ticket.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  ticket.findById(id).then(ticket => {
    res.jsonp(ticket);
  });
};