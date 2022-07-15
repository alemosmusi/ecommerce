const { modelUsers } = require("../db")

const getUsers = async (req, res) => {
    try {
        const response = await modelUsers.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor.'})
    }
}

const loginUser = async (req, res) => {
    const {email , given_name, family_name, nickname, picture} = req.body;

    try {
        const [users, created] = await modelUsers.findOrCreate({
            where: {email},
            defaults: {
                email: email,
                username: nickname,
                name: given_name,
                lastname: family_name,
                avatar_url: picture,
                roleId: 2,
                status: 'Active'
            }
        })

        res.status(200).json(users)
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor.', error})
    }
}

module.exports = {
    getUsers,
    loginUser
}