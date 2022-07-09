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
        const json = require('../temporal-json/categories.json')

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

module.exports = Categories