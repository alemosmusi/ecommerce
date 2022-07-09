const { modelQuestions } = require('../db.js')

const getQuestions = async (req, res) => {
    try {
        const response = await modelQuestions.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createQuestions = (req, res) => {
    const { question , answers} = req.body

    try {
        const product = modelQuestions.create({
            question,
            answers
        })

        res.status(200).send({msg: 'question created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}


const deleteQuestions = async (req, res) => {
    const { id } = req.params;
    console.log(id)

    try {
        const deleteQuestions = await modelQuestions.findAll({
            where: {
                id: id
            }
        })
        if (deleteQuestions) {
            modelQuestions.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).send({msg: 'Removed  question successfully'})
        } else {
            return res.status(500).send({msg: 'Error internal server', error})
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getQuestions,
    createQuestions,
    deleteQuestions
}