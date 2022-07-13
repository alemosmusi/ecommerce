const { modelUsers } = require("../db")

const getUsers = async (req, res) => {
    try {
        const response = await modelUsers.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server'})
    }
}

module.exports = {
    getUsers
}