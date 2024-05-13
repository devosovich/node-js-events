module.exports = (sequelize, Sequelize) => {
  return sequelize.define("events", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    event_date: {
      type: Sequelize.STRING
    },
    organizer: {
      type: Sequelize.STRING
    },
  });
};
