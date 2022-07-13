const { modelCategories } = require('../db.js')

const getCategories = async (req, res) => {
    try {
        const response = await modelCategories.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}

const createCategories = async (req, res) => {
    const { name } = req.body

    try {
        const category = await modelCategories.create({
            name
        })

        res.status(200).send({msg: 'Category created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}
const deleteCategories = async (req, res) => {
    const { id } = req.body;

    try {
        await modelCategories.destroy({
            where: {
                id
            }
        })
        
        res.status(200).send({msg: 'Category removed successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getCategories,
    createCategories,
    deleteCategories
}