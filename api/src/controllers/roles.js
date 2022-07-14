const { modelRoles } = require('../db')
 
const getRoles = async (req, res) => {
    try {
        const response = await modelRoles.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createRole = () => {

}

const updateUserRole = async (req, res) => {
    const { id } = req.params
    const { roleID } = req.body

    try {
        const user = modelUsers.findByPk(id)
        if (!user) return res.status(200).send({msg: 'User not exists database!'})

        const role = modelRoles.findByPk(roleID)
        if (!role) return res.status(200).send({msg: 'Role not exists database!'})

        //xd

    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getRoles,
    createRole,
    updateUserRole
}