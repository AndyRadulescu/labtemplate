"use strict";

const comments = require('../models').comment;
const user = require('../models').user;

exports.list = function (req, res, next) {
  comments.findAll({
    where: req.query,
    include: [{ all: true }]
  }).then(comments => {
    res.jsonp(comments);
  }).catch(next);
};

exports.create = function (req, res) {
  res.jsonp(comments.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  comments.findById(id, {
    include: [{ model: user, as: 'user' }]
  }).then(comments => {
    res.jsonp(comments);
  });
};

exports.findUser = function (req, res) {
  comments.findById(req.params.id, {
    include: [{ model: user, as: 'user' }]
  }).then(user => {
    res.jsonp(user);
  })
}

exports.updateComment = function (req, res) {
  let id = req.params.id;
  comments.findById(req.params.id)
    .then(comments => {
      if (!comments) {
        return res.status(400).send({
          message: "Comment not found"
        });
      }
      comments.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  comments.findById(req.params.id)
    .then(comments => {
      if (!comments) {
        return res.status(400).send({
          message: 'Comment Not Found',
        });
      }
      return comments
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}