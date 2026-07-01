const { DataTypes, Sequelize } = require('sequelize');
const dbConnection = require('./../db'); // ../db <---will work but you want to make sure you are taking the proper path


const Review = dbConnection.define(
    'Review',
    {
        reviewer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT
        }
    }
)

module.exports = Review