const { modelUsers } = require("../db")



// email: "alemosmusi@gmail.com"
// email_verified: true
// family_name: "Lemos"
// given_name: "Agustin"
// locale: "es-419"
// name: "Agustin Lemos"
// nickname: "alemosmusi"
// picture: 


// dni": 12346,
//         "username": "john_smith",
//         "password": "1234",
//         "name": "John Smith",
//         "lastname": "Smith",
//         "genre":"Men",
//         "email":"John@example.com",
//         "phone":60,
//         "adress":"Calle Siempre Alegre",
//         "country":"Colombia",
//         "avatar_url": "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
//         "rol": 1
const getLogin = async (req, res) => {
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
        // res.status(500).send({msg: 'Error internal server'})
        res.status(500).send({error: error})
    }
}

module.exports = {
    getLogin
}