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

const getDetailsProduct = async (req, res) => {
    const { id } = req.params

    try {
        const response = await modelProducts.findOne({
            where: {
                id
            }
        }, {raw: true})

        if (!response) {
            return res.status(204).send({msg: 'No results!'})
        }

        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const deleteShoes = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteShoes = await modelProducts.findAll({
            where: {
                id: id
            }
        })
        if (deleteShoes) {
            modelProducts.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).send({msg: 'Removed  shoe successfully'})
        } else {
            return res.status(500).send({msg: 'Error internal server', error})
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getShoes,
    createShoes,
    getDetailsProduct,
    deleteShoes
}