const { modelTemplate } = require('../db.js')

const getTemplates = async (req, res) => {
    try {
        const response = await modelTemplate.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor', error})
    }
}

const createTemplate = async (req, res) => {
    const { name, skin, image, description, rating } = req.body
    
    try {
        const template = await modelTemplate.create({
            name,
            skin,
            image,
            description,
            rating
        })

        res.status(200).send({msg: 'Template creado!'})
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor', error})
    }
}

module.exports = {
    getTemplates,
    createTemplate
}