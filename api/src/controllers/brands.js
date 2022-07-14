const { modelBrands, modelProducts } = require('../db.js')

const getBrands = async (req, res) => {
    try {
        const response = await modelBrands.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createBrand = async (req, res) => {
    const { name } = req.body

    try {
        const brand = await modelBrands.findOne({where: {name}}, {raw: true})
        if (brand) return res.status(200).send({msg: 'Brand exists database!'})

        await modelBrands.create({
            name
        })

        res.status(200).send({msg: 'Brand create successfully'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const updateBrand = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    try {
        const brand = await modelBrands.findByPk(id)
        if (!brand) return res.status(200).send({msg: 'Brand not exists database!'})

        await modelBrands.update(
            { name },
            {
                where: {id}
            }
        )

        res.status(200).send({msg: 'Brand update!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const getProductsBrand = async (req, res) => {
    const { id } = req.params

    try {
        const brand = await modelBrands.findByPk(id)
        if (!brand) return res.status(200).send({msg: 'Brand not exists database!'})

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

/*const deleteBrands = async (req, res) => {
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
}*/

module.exports = {
    getBrands,
    createBrand,
    updateBrand,
    getProductsBrand
}