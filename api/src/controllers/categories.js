const { modelCategories } = require('../db.js')

const getCategories = async (req, res) => {
    try {
        const response = await modelCategories.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}

const createCategory = async (req, res) => {
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
const deleteCategory = async (req, res) => {
    const { name } = req.params;

    try {
        const brand = await modelCategories.destroy({
            where: {
                name
            }
        })
        
        res.status(200).send({msg: 'Category removed successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getCategories,
    createCategory,
    deleteCategory
}