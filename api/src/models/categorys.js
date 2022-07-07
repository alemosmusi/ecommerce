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

    return model
}

module.exports = Categorys