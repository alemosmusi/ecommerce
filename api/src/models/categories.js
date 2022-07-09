const { DataTypes } = require('sequelize')

const Categories = (sequelize) => {
    const model = sequelize.define('categories', {
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
        const response = require('../temporal-json/categories.json')

        response.forEach(async (value) => {
            await model.create({
                name: value.name
            })
        })
    }
    
    setTimeout(preStart, 3000)

    return model



}

module.exports = Categories