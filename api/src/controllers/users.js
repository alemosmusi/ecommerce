const { modelUsers } = require('../db.js') 

const getUsers = async(req, res) => {
    try {
        const response = await modelUsers.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports ={
    getUsers
}