"use strict";

const ticket = require('../models').ticket;

exports.list = function (req, res) {
  ticket.findAll({
    include: [{ all:true }]
  }).then(ticket => {
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

exports.updateTicket = function (req, res) {
  let id = req.params.id;
  ticket.findById(req.params.id)
    .then(ticket => {
      if (!ticket) {
        return res.status(400).send({
          message: 'Ticket Not Found'
        });
      }
      ticket.update(req.body, {
        where:
          { id: id }
      }).then(() => res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

exports.delete = function (req, res) {
  let id = req.params.id;
  ticket.findById(req.params.id)
    .then(ticket => {
      if (!ticket) {
        return res.status(400).send({
          message: 'Ticket Not Found',
        });
      }
      return ticket
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};