const {DataTypes} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  return sequelize.define("participants", {
    full_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.STRING
    },
    hear_from_id: {
      type: DataTypes.INTEGER,
    },
  });
};
