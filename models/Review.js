const { DataTypes, Sequelize } = require('sequelize');
const dbConnection = require('../db');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const Review = dbConnection.define(
    'Review',
    {
        reviewer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
        }
    }
)

module.exports = Review