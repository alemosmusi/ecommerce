const { modelColors, modelProducts } = require('../db')

const getColors = async (req, res) => {
    try {
        const response = await modelColors.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}

const createColor = async (req, res) => {
    const { name } = req.body

    try {
        const color = await modelColors.findOne({where: {name}}, {raw: true})
        if (color) return res.status(200).send({msg: 'Color exists database!'})

        await modelColors.create({
            name
        })

        res.status(200).send({msg: 'Color create successfully'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const updateColor = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    try {
        const color = await modelColors.findByPk(id)
        if (!color) return res.status(200).send({msg: 'Color not exists database!'})

        await modelColors.update(
            { name },
            {
                where: {id}
            }
        )

        res.status(200).send({msg: 'Color update!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const getProductsColor = async (req, res) => {
    const { id } = req.params

    try {
        const color = await modelColors.findByPk(id)
        if (!color) return res.status(200).send({msg: 'Color not exists database!'})

        const response = await modelColors.findOne({
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

/*const deleteColor = async (req, res) => {
    const { name } = req.params;

    try {
        const color = await modelColors.destroy({
            where: {
                name
            }
        })
        
        res.status(200).send({msg: 'Removed  color successfully'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}*/

module.exports = {
    getColors,
    createColor,
    updateColor, 
    getProductsColor
}