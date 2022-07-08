const { DataTypes } = require('sequelize')

const Colors = (sequelize) => {
    const model = sequelize.define('colors', {
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

    const preStart = async () => {
        const response = require('../temporal-json/api.json')

        response.sneakers.forEach(async (value) => {
            await model.findOrCreate({
                where: {
                    name: value.color
                }
            })
        })
    }
    
    setTimeout(preStart, 3000)

    return model



}

module.exports = Colors