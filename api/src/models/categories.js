const { DataTypes } = require('sequelize')

const Categories = sequelize => {
  const model = sequelize.define(
    'categories',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  )

  const preStart = async () => {
    const json = require('../temporal-json/categories.json')

    json.forEach(async value => {
      const { name } = value

      try {
        await model.findOrCreate({
          where: {
            name,
          },
        })
      } catch (error) {
        console.log(error)
      }
    })
  }

  setTimeout(preStart, 3000)

  return model
}

module.exports = Categories
