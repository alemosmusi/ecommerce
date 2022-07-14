const { modelOrdens } = require("../db")

const getOrdens = async (req, res) => {
    try {
        const response = await modelOrdens.findAll({raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createOrden = async (req, res) => {
    const { products, price_total, amount } = req.body

    try {
        const orden = await modelOrdens.create({
            amount: products.reduce((a, value) => a += amount, 0),
            //price_total: products.
        })
    } catch (error) {

    }
}

/*products: [
    {
        productID: 1,
        size: 10,
        amount: 3,
        price: 10
    },
    {
        productID: 1,
        size: 10,
        amount: 3
    }
    {
        productID: 1,
        size: 10,
        amount: 3
    }
    {
        productID: 1,
        size: 10,
        amount: 3
    }
]*/

const updateOrden = () => {}

module.exports = {
    getOrdens,
    createOrden,
    updateOrden
}