const { DataTypes } = require('sequelize')

const Users = (sequelize) => {
    const model = sequelize.define('users', {
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
            createdAt: false,
            updatedAt: false
        }
    )

    const preStart = async () => {
        const json = require('../temporal-json/users.json')
    
        json.forEach(async (value) => {
          const { dni, name, lastName, username, genre, email, phone, adress, country, } = value
    
          await model.create({
            dni,
            name,
            lastName,
            username,
            genre,
            email,
            phone,
            adress,
            country,
          })
        })
      }
    
      setTimeout(preStart, 3000)
    
      return model
}

module.exports = Users