const { modelCategories, modelProducts } = require('../db.js')

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
        const category = await modelCategories.findOne({where: {name}}, {raw: true})
        if (category) return res.status(200).send({msg: 'Category exists database!'})

        await modelCategories.create({
            name
        })

        res.status(200).send({msg: 'Category created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}

const updateCategory = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    try {
        const category = await modelCategories.findByPk(id)
        if (!category) return res.status(200).send({msg: 'Category not exists database!'}) 

        await modelCategories.update(
            { name },
            {
                where: {id}
            }
        )

        res.status(200).send({msg: 'Category update!'}) 
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}

const getProductsCategory = async (req, res) => {
    const { id } = req.params

    try {
        const category = await modelCategories.findByPk(id)
        if (!category) return res.status(200).send({msg: 'Category not exists database!'})

        const response = await modelCategories.findOne({
            where: { id },
            include: {
                model: modelProducts
            }
        })

        res.status(200).json(response) 
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!'})
    }
}

/*const deleteCategory = async (req, res) => {
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
}*/

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    getProductsCategory
}