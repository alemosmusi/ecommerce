const { DataTypes } = require('sequelize')

const Genders = sequelize => {
  const model = sequelize.define(
    'genders',
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

  const preStart = () => {
    const json = require('../temporal-json/genders.json')

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

module.exports = Genders
