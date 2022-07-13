const { DataTypes } = require('sequelize');
const { all } = require('../routes');

const Ordens = (sequelize) => {
    const model = sequelize.define('ordens', {
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        price_total: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        product_size: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        view: {
            type: DataTypes.NUMBER,
            allowNull: false
        }

    })



    return model
}

module.exports = Ordens

