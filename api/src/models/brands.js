const { DataTypes } = require('sequelize')

const Brands = (sequelize) => {
    const model = sequelize.define('brands', {
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
        const response = require('../temporal-json/api.json')

        response.sneakers.forEach(async (value) => {
            await model.findOrCreate({
                where: {
                    name: value.brand_name
                }
            })
        })
    }

    setTimeout(preStart, 3000)

    return model
}

module.exports = Brands