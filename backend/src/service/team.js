"use strict";

const team = require('../models').team;
const grandprixteam = require('../models').grandprixteam;
const grandprix = require('../models').grandprix;

exports.list = function (req, res) {
  team.findAll({
    where: req.query,
    include: [{ all: true }]
  }).then(team => {
    res.jsonp(team);
  });
};

exports.create = function (req, res) {
  res.jsonp(team.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  team.findById(id, {
    include: [{ model: grandprix }]
  }).then(team => {
    res.jsonp(team);
  });
};

exports.updateTeam = function (req, res) {
  let id = req.params.id;
  console.log(id);
  team.findById(req.params.id)
    .then(team => {
      if (!team) {
        return res.status(400).send({
          message: 'Team Not Found'
        });
      }
      team.update(req.body, {
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
      team_id: id
    }
  });
  team.findById(req.params.id)
    .then(team => {
      if (!team) {
        return res.status(400).send({
          message: 'Team Not Found',
        });
      }
      return team
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};