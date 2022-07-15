const { modelOrdens, modelUsers, modelProducts } = require("../db")

const getOrdens = async (req, res) => {
    try {
        const response = await modelOrdens.findAll({
            include: [modelUsers, modelProducts]
        },{raw: true})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const createOrden = async (req, res) => {
    const { id } = req.params
    const { products, details, price_total, amount_total } = req.body

    try {
        const user = await modelUsers.findByPk(id)
        if (!user) return res.status(200).send({msg: 'User not exists database!'})

        const order = await modelOrdens.create({
            amount_total,
            price_total,
            details
        })

        order.setUser(id)
        order.setProducts(products)
        
        res.status(200).send({msg: 'Order created successfully!'})
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

const updateOrden = () => {}

const getOrdensUser = async (req, res   ) => {
    const { id } = req.params

    try {
        const user = await modelUsers.findByPk(id)
        if (!user) return res.status(200).send({msg: 'User not exists database!'})

        const response = await modelUsers.findOne({
            where: {
                id
            },
            include: {
                model: modelOrdens,
                include: modelProducts
            }
        })

        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error internal server', error})
    }
}

module.exports = {
    getOrdens,
    createOrden,
    updateOrden,
    getOrdensUser
}