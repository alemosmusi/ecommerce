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
    rating: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  },
  {
    createdAt: false,
    updatedAt: false
  })

  return model
};

module.exports = Products


