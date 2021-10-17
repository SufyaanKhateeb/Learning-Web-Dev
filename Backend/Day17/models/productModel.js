const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const product = sequelize.define(
    "Products",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        //no. of products left
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING,
        }
    }
);

module.exports = product;
