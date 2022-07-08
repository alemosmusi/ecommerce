const { DataTypes } = require('sequelize');

const Products = (sequelize)=>{
  const model = sequelize.define('products', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      brand_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
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
        type: DataTypes.STRING,
        allowNull: false
      },
      size_range: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      material: {
        type: DataTypes.STRING
      },
      released: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      designer: {
        type: DataTypes.STRING
      },
      details : {
        type: DataTypes.STRING,
        allowNull: false
      },
      shoe_condition: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categories: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  )

  const preStart = async () => {
    const response = require('../temporal-json/api.json')

    response.sneakers.forEach(async (value) => {
      const { name, brand_name, story_html: description, retail_price_cents: price, original_picture_url: img, color, size_range, material, release_year: released, gender, designer, details, shoe_condition, rating, category: categories} = value

      await model.create({
        name,
        brand_name,
        description,
        price,
        img,
        stock: 1,
        color,
        size_range,
        material,
        released,
        gender,
        designer,
        details,
        shoe_condition,
        rating: Math.floor(Math.random()*5),
        categories
      })
    })
  }

  setTimeout(preStart, 3000)

  return model
};

module.exports = Products


