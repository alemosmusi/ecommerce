const { modelColors } = require('../db')

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
        const colors = await modelColors.create({
            name
        })

        res.status(200).send({msg: 'Color created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}
const deleteColor = async (req, res) => {
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
}

module.exports = {
    getColors,
    createColor,
    deleteColor
}