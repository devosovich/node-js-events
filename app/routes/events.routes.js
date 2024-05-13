module.exports = app => {
  const events = require("../controllers/events.controller");
  const participants = require("../controllers/participants.controller");

  var router = require("express").Router();

  router.get("/", events.findAll);

  router.post("/:id/participants", participants.create);
  router.get("/:id/participants", participants.findAllByEventId);

  app.use("/api/v1/events", router);
};
