const { DataTypes } = require('sequelize')

const Reviews = async (sequelize) => {
    const model = sequelize.define('reviews', {

    })

    return model
}

module.exports = Reviews