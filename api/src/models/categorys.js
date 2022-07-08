const { DataTypes } = require('sequelize')

const Categorys = (sequelize) => {
    const model = sequelize.define('categorys', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        createdAt: false,
        updatedAt: false 
    })


    const start = async () => {
        const response = require('../temporal-json/api.json')
        const z = response.sneakers.forEach(async (value)  => {
            const  category  = value.category.join('')
            const x = await model.findOrCreate({
                where: { name: category}
            })
        })
    }    
    setTimeout(start, 1000)
    return model



}

module.exports = Categorys