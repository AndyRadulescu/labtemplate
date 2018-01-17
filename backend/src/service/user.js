"use strict";

const user = require('../models').user;
const comment = require('../models').comment;

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
  console.log(req);
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  user.findById(id, {
    include: [{ all: true  }]
  }).then(user => {
    res.jsonp(user);
  });
};

exports.updateUser = function (req, res) {
  let id = req.params.id;
  console.log(id);
  user.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found'
        });
      }
      user.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
    res.jsonp({data:"updated"});
}

exports.delete = function (req, res) {
  let id = req.params.id;
  comment.destroy({
    where: {
      id: id
    }
  });
  user.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};
