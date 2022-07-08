const Axios = require('axios')
const fs = require('fs')

const { DataTypes } = require('sequelize');

const Products = (sequelize)=>{
  const model = sequelize.define('products', {
    brand_name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT 
    },
    price: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    color: {
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
    gender: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    designer: {
      type: DataTypes.STRING
    },
    details : {
      type: DataTypes.STRING
    },
    shoe_condition: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER,
    }
  },
  {
    createdAt: false,
    updatedAt: false
  })

  const start = async () => {
    const response = require('../temporal-json/api.json')

    response.sneakers.forEach(async (value) => {
      const { brand_name, category, color, designer, details, gender, original_picture_url: img, release_year: released, retail_price_cents: price, shoe_condition, size_range, story_html: description, upper_material: material } = value

      const product = await model.create({
        brand_name,
        category,
        color,
        designer,
        details,
        gender,
        img,
        released,
        price,
        shoe_condition,
        size_range,
        description,
        material,
        stock: 1,
        rating: Math.floor(Math.random()*5)
      })

      console.log('Zapatilla creada!')
    })
  }

  setTimeout(start, 2000)

  return model
};

module.exports = Products


