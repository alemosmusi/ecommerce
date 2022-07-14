const { DataTypes } = require('sequelize');

const Ordens = (sequelize) => {
    const model = sequelize.define('ordens', {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_size: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'En proceso'
        },
        view: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    })

    return model
}

module.exports = Ordens