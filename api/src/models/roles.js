const { DataTypes } = require('sequelize')

const Roles = (sequelize) => {
    const model = sequelize.define('roles', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },  {
            createdAt: false,
            updatedAt: false
        }
    )

    const preStart = () => {
        const json = require('../temporal-json/roles.js')

        json.forEach(async (value) => {
            const { name } = value

            await model.create({
                name
            })
        })
    }

    setTimeout(preStart, 3000)

    return model
} 

module.exports = Roles