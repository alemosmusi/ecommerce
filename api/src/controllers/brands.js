const { modelBrands, modelProducts } = require('../db.js')

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

const deleteBrands = async (req, res) => {
    const { id } = req.body

    try {
        const brand = await modelBrands.destroy({
            where: {
                id
            }
        })

        if (!brand) {
            return res.status(200).send({msg: "Brand not found!"})
        }

        res.status(200).send({msg: "Brand delete successfully"})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const updateBrands = async (req, res) => {
    const { id, name } = req.body

    try {
        const response = await modelBrands.update(
            {
                name
            },
            {
                where: {id}
            }
        )

        if (!response) {
            return res.status(204).send({msg: 'Brand not found!'})
        }

        res.status(200).send({msg: 'Brand update!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const getBrandProducts = async (req, res) => {
    const { id } = req.params

    try {
        const response = await modelBrands.findOne({
            where: {
                id
            },
            include: {
                model: modelProducts
            }
        })

        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getBrands,
    createBrands,
    deleteBrands,
    updateBrands,
    getBrandProducts
}