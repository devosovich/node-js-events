const db = require("../models");
const Event = db.events;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const title = req.query.title;
    const limit = req.query.limit;
    const offset = req.query.offset;
    var condition = title ? {title: {[Op.iLike]: `%${title}%`}} : null;

    Event.findAndCountAll({ where: condition, limit: limit, offset: offset })
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
