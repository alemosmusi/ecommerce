const { DataTypes } = require('sequelize');

const Questions = (sequelize)=>{
  const model = sequelize.define('questions', {
      question: {
        type: DataTypes.STRING,
        allowNull: false
      },
      answers: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      
    },
    {
      createdAt: false,
      updatedAt: false
    }
  )

  const preStart = async () => {
    const response = require('../temporal-json/questions.json')

    response.sneakers.forEach(async (value) => {
      const { question, answers} = value

      await model.create({
        question,
        answers
      })
    })
  }

  setTimeout(preStart, 3000)

  return model
};

module.exports = Questions


