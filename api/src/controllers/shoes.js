const { modelProducts, modelColors, modelBrands, modelCategories, modelGenders } = require('../db.js')

const getShoes = async (req, res) => {
  try {
    const response = await modelProducts.findAll({
      include: [modelCategories, modelBrands, modelColors, modelGenders]
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).send({ msg: 'Error internal server', error })
  }
}

const createShoes = async (req, res) => {
  const { name, nickname, description, price, img, size_range, material, released, designer, details, shoe_condition, rating, categories, brandID, colorID, genderID } = req.body

  try {
    const product = await modelProducts.create({
      name,
      nickname: !nickname ? name : nickname,
      description,
      price,
      img,
      stock_total: size_range.reduce((a, value) => a+=value.stock, 0),
      size_range,
      material,
      released,
      designer,
      details,
      shoe_condition,
      rating
    })

    product.setCategories(categories)
    product.setBrand(brandID)
    product.setColor(colorID)
    product.setGender(genderID)

    res.status(200).send({ msg: 'Shoes created successfully!', product})
  } catch (error) {
    res.status(500).send({ msg: 'Error internal server', error })
  }
}

const productDetails = async (req, res) => {
  const { id } = req.params

  try {
    const response = await modelProducts.findOne({
      where: {
        id
      },
      include: [modelCategories, modelBrands, modelColors, modelGenders]
    })

    res.status(200).json(response)
  } catch (error) {
    res.status(500).send({ msg: 'Error internal server', error })
  }
}

/*const deleteShoes = async (req, res) => {
  const { id } = req.params

  try {
    const product = await modelProducts.destroy({
      where: {
        id,
      },
    })
    res.status(200).send({ msg: 'Removed  shoe successfully' })
  } catch (error) {
    res.status(500).send({ msg: 'Error internal server', error })
  }
}*/

module.exports = {
  getShoes,
  createShoes,
  productDetails
}
