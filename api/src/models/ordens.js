const { DataTypes } = require('sequelize');

const Ordens = (sequelize) => {
    const model = sequelize.define('ordens', {
        id_user: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },  {
            createdAt: false,
            updatedAt: false
        }
    )

    return model
}

module.exports = Ordens

