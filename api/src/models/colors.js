const { DataTypes } = require('sequelize')

const Colors = sequelize => {
  const model = sequelize.define(
    'colors',
    {
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
    const json = require('../temporal-json/colors.json')

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

module.exports = Colors
