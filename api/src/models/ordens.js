const { Datatypes } = require('sequelize');

const Ordens = (sequelize) => {
    const model = sequelize.define('ordens', {
        id_user:{
            type:Datatypes.STRING,
            allowNull: false,
        },
        status:{
            type: Datatypes.STRING,
            allowNull: false,
        }
    })

    return model
}

module.exports = Ordens

