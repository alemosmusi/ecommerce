const { modelBrands } = require('../db.js')

const getBrands = async (req, res) => {
    try {
        const response = await modelBrands.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createBrands = async (req, res) => {
    const { name } = req.body

    try {
        const brand = await modelBrands.create({
            name
        })

        res.status(200).send({msg: 'Brand create successfully'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const deleteBrands = () => {}

module.exports = {
    getBrands,
    createBrands,
    deleteBrands
}