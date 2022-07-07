const Axios = require('axios')

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
      type: DataTypes.NUMBER,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    color: {
      type: DataTypes.ARRAY
    },
    brand_name: {
      type: DataTypes.STRING
    },
    size_range: {
      type: DataTypes.ARRAY
    },
    material: {
      type: DataTypes.STRING
    },
    released: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  },
  {
    createdAt: false,
    updatedAt: false
  })

  sequelize.authenticate().then(async () => {
    const response = await Axios.get('https://github.com/Stupidism/goat-sneakers/blob/master/api.json')
    console.log(response)
  })

  return model
};

module.exports = Products


