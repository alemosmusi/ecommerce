const { modelGenders, modelProducts } = require('../db.js')

const getGenders = async (req, res) => {
    try {
        const response = await modelGenders.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createGender = async (req, res) => {
    const { name } = req.body

    try {
        const gender = await modelGenders.findOne({where: {name}}, {raw: true})
        if (gender) return res.status(200).send({msg: 'Gender exists database!'})

        await modelGenders.create({
            name
        })

        res.status(200).send({msg: 'Gender create successfully'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const updateGender = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    try {
        const gender = await modelGenders.findByPk(id)
        if (!gender) return res.status(200).send({msg: 'Gender not exists database!'})

        await modelGenders.update(
            { name },
            {
                where: {id}
            }
        )

        res.status(200).send({msg: 'Gender update!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const getProductsGender = async (req, res) => {
    const { id } = req.params

    try {
        const gender = await modelGenders.findByPk(id)
        if (!gender) return res.status(200).send({msg: 'Gender not exists database!'})

        const response = await modelGenders.findOne({
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

/*const deleteGender = async (req, res) => {
    const { name } = req.params;

    try {
        const gender = await modelGenders.destroy({
            where: {
                name
            }
        })
        
        res.status(200).send({msg: 'Gender removed successfully'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}*/

module.exports = {
    getGenders,
    createGender,
    updateGender,
    getProductsGender
}