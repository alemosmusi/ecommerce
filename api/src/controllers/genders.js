const { modelGenders } = require('../db.js')

const getGenders = async (req, res) => {
    try {
        const response = await modelGenders.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createGenders = async (req, res) => {
    const { name } = req.body

    try {
        const gender = await modelGenders.create({
            name
        })

        res.status(200).send({msg: 'Gender create successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getGenders,
    createGenders
}