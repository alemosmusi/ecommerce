const { DataTypes } = require('sequelize')

const Roles = (sequelize) => {
    const model = sequelize.define('Roles', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    })

    return model
} 