"use strict";

const grandprix = require('../models').grandprix;
const team = require('../models').team;
const ticket = require('../models').ticket;
const grandprixteam = require('../models').grandprixteam;

exports.list = function (req, res) {
  grandprix.findAll({
    where: req.query,
    include: [{ all: true }]
  }).then(grandprix => {
    res.jsonp(grandprix);
  });
};

exports.create = function (req, res) {
  res.jsonp(grandprix.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  grandprix.findById(id, {
    include: [{
      model: ticket,
      model: team,
    }]
  }).then(grandprix => {
    res.jsonp(grandprix);
  });
};

exports.updateGrandprix = function (req, res) {
  let id = req.params.id;
  grandprix.findById(req.params.id)
    .then(grandprix => {
      if (!grandprix) {
        return res.status(400).send({
          message: "Grandprix not found"
        });
      }
      grandprix.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  grandprixteam.destroy({
    where: {
      grandprix_id: id
    }
  });
  ticket.destroy({
    where: {
      grandprix_id: id
    }
  });
  grandprix.findById(req.params.id)
    .then(grandprix => {
      if (!grandprix) {
        return res.status(400).send({
          message: 'Grandprix Not Found',
        });
      }
      return grandprix
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}