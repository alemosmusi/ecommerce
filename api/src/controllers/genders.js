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

const deleteGender = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteGender = await modelGenders.findAll({
            where: {
                id: id
            }
        })
        if (deleteGender) {
            modelGenders.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).send({msg: 'Removed gender successfully'})
        } else {
            return res.status(500).send({msg: 'Error internal server', error})
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getGenders,
    createGenders,
    deleteGender
}