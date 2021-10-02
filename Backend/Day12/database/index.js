const {Sequelize} = require('sequelize');

const sequelize = new Sequelize (
    "postgres",
    "postgres",
    "12345678",
    {
        host: "localhost",
        dialect: "postgres"
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