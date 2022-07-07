const { Datatypes } = require('sequelize');

const Ordens = (sequelize) => {
    const model = sequelize.define('ordens', {
        status:{
            type: Datatypes.STRING,
            allowNull: false,
        }
    })

    return model
}

module.exports = Ordens

