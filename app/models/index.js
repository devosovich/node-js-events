const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.events = require("./event.model")(sequelize, Sequelize);
db.participants = require("./participant.model")(sequelize, Sequelize);

const Event = db.events;
const Participant = db.participants;

Event.hasMany(Participant);
Participant.belongsTo(Event);

sequelize.sync({force: true}).then(() => {
    for (let i = 0; i < 25; i++) {
        const event = {
            title: `title${i}`,
            description: 'sdfsdfsdf',
            event_date: '2024-12-12 01:00:00',
            organizer: `Organizer${i}`
        };

        Event.create(event);
    }
})

module.exports = db;
