require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    SEQUELIZE_DATABASE: process.env.SEQUELIZE_DATABASE,
    SEQUELIZE_USERNAME: process.env.SEQUELIZE_USERNAME,
    SEQUELIZE_PASSWORD: process.env.SEQUELIZE_PASSWORD,
    SEQUELIZE_HOST: process.env.SEQUELIZE_HOST,
    SEQUELIZE_DIALECT: process.env.SEQUELIZE_DIALECT,
    SECRET: process.env.SECRET,
}