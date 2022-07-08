const { modelProducts } = require('../db.js')

const getShoes = async (req, res) => {
    try {
        const response = await modelProducts.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createShoes = (req, res) => {
    const { name, brand_name, description, price, img, color, size_range, material, released, gender, designer, details, shoe_condition, rating, categories} = req.body

    try {
        const product = modelProducts.create({
            name,
            brand_name,
            description,
            price,
            img,
            stock,
            color,
            size_range,
            material,
            released,
            gender,
            designer,
            details,
            shoe_condition,
            rating,
            categories
        })

        res.status(200).send({msg: 'Shoes created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getShoes,
    createShoes
}