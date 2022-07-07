const { Datatypes } = require('sequelize')

const Categorys = (sequelize) => {
    const model = sequelize.define('categorys', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        }
    })

    return model
}

module.exports = Categorys