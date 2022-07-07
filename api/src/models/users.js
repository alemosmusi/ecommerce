const { DataTypes } = require('sequelize')

const Users = (sequelize) => {
    const model = sequelize.define('users', {
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telephone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false
    })

    return model
}

module.exports = Users