const db = require("../models");
const Participant = db.participants;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const id = req.params.id;

  const participant = {
    full_name: req.body.full_name,
    email: req.body.email,
    birthday: req.body.birthday,
    hear_from_id: req.body.hear_from_id,
    eventId: id
  };

  Participant.create(participant)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Participant."
      });
    });
};

exports.findAllByEventId = (req, res) => {
  const id = req.params.id;
  const limit = req.query.limit;
  const offset = req.query.offset;
  const condition = { eventId: { [Op.eq]: id } };


  Participant.findAndCountAll({ where: condition, limit: limit, offset: offset })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving events."
        });
      });
};