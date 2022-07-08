const { DataTypes } = require('sequelize');

const Products = (sequelize)=>{
  const model = sequelize.define('products', {
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue(value.replace('/(<([^>]+)>)/ig', ''))
      }
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
      type: DataTypes.STRING,
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

      const product = await model.findOrCreate({
        brand_name,
        description,
        price,
        img,
        stock: 1,
        color,
        size_range,
        material,
        released,
        gender: gender.join(''),
        designer,
        details,
        shoe_condition,
        rating: Math.floor(Math.random()*5)
      })

      console.log('Zapatilla creada! ')
    })
  }

  setTimeout(start, 2000)

  return model
};

module.exports = Products


