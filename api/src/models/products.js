const Axios = require('axios')
const fs = require('fs')

const { DataTypes } = require('sequelize');

const Products = (sequelize)=>{
  const model = sequelize.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    brand_name: {
      type: DataTypes.STRING
    },
    size_range: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    material: {
      type: DataTypes.STRING
    },
    released: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    createdAt: false,
    updatedAt: false
  })

  const start = async () => {
    const response = await fs.readFile('../temporal-json/api.json', () => {
      
    })
  }

  setTimeout(start, 2000)

  return model
};

module.exports = Products


