const { Sequelize } = require('sequelize');
const { SEQUELIZE_DATABASE, SEQUELIZE_USERNAME, SEQUELIZE_PASSWORD, SEQUELIZE_HOST, SEQUELIZE_DIALECT } = require('../config');

const sequelize = new Sequelize (
    SEQUELIZE_DATABASE,
    SEQUELIZE_USERNAME,
    SEQUELIZE_PASSWORD,
    {
        host: SEQUELIZE_HOST,
        dialect: SEQUELIZE_DIALECT
    }
)

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conection established with DB");
    } catch (error) {
        console.error("Unable to connect to DB");
    }
})();

module.exports = sequelize;