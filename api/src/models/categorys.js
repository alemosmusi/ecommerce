const { Datatypes } = require('sequelize')

const Categorys = (sequelize) => {
    const model = sequelize.define('categorys', {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        }
<<<<<<< HEAD
    },{
        createdAt: false,
        updatedAt: false 
=======
    }, {
        createdAt: false,
        updatedAt: false
>>>>>>> 0f5a62484fc47d21847dadaaad54a35361378a18
    })

    return model
}

module.exports = Categorys