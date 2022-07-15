const { modelRoles, modelUsers } = require('../db')
 
const getRoles = async (req, res) => {
    try {
        const response = await modelRoles.findAll({
            include: modelUsers
        }, {raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createRole = async (req, res) => {
    const { name } = req.body

    try {
        const role = await modelRoles.findOne({where: {name}})
        if (role) return res.status(200).send({msg: 'This role exists in database!'})

        await modelRoles.create({
            name
        })

        res.status(200).send({msg: 'Role created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server!', error})
    }
}

const updateUserRole = async (req, res) => {
    const { id } = req.params
    const { roleID } = req.body

    try {
        const user = await modelUsers.findByPk(id)
        if (!user) return res.status(200).send({msg: 'User not exists database!'})

        const role = await modelRoles.findByPk(roleID)
        if (!role) return res.status(200).send({msg: 'Role not exists database!'})

        await user.setRole(roleID)

        res.status(200).send({
            username: user.username,
            roleId: roleID,
            msg: 'User update role!'
        })
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getRoles,
    createRole,
    updateUserRole
}