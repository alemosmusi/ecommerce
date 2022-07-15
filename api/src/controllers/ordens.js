const { modelOrdens, modelUsers, modelProducts } = require("../db")

const getOrdens = async (req, res) => {
    try {
        const response = await modelOrdens.findAll({
            include: [modelUsers, modelProducts]
        },{raw: true})

        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor.', error})
    }
}

const createOrden = async (req, res) => {
    const { userId: id } = req.params
    const { details, price_total, amount_total } = req.body

    const updateStock = (arraySizes, size, amount) => {
        const obj = arraySizes.find(obj => obj.size === size)

        if (!obj) return size
        if (obj.stock === 0) return size
        if (obj.stock < amount) return size
        
        const index = arraySizes.indexOf(obj)
        arraySizes[index].stock -= amount

        return arraySizes
    }

    try {
        const user = await modelUsers.findByPk(id)
        if (!user) return res.status(400).send({msg: `El usuario ${id} no existe en la base de datos.`})

        const products = await Promise.all(details.map(obj => {
            return modelProducts.findByPk(obj.productID)
        }))
        if (!products) {
            return res.status(400).send({msg: 'Uno de los productos no están registrados en la base de datos.'})
        }

        for (let i = 0; i < details.length; i++) {
            const { size_range } = products[i]

            const modSizes = updateStock(size_range, details[i].size, details[i].amount)
            if (!modSizes) {
                return res.status(400).send({msg: `El producto ${products[i].id} de la talla ${modSizes} no cuenta con el stock necesario (o no existe la talla) para generar esta orden.`})
            }

            products[i].update({size_range: modSizes})
        }

        products.forEach(product => product.save())

        const order = await modelOrdens.create({
            amount_total,
            price_total,
            details
        })

        const relProduct = details.map(obj => obj.productID)

        order.setUser(id)
        order.setProducts(relProduct)
        
        res.status(200).send({msg: 'Orden creada con éxito.'})
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor.', error})
    }
}

const updateOrden = async (req, res) => {
    const { ordenId: id } = req.params
    const { state } = req.body

    try {
        const orden = await modelOrdens.findByPk(id)
        if (!orden) return res.status(400).send({msg: `No existe la orden ${id} en la base de datos.`})

        await modelOrdens.update({
            state
        }, {
            where: {id}
        })

        res.status(200).send({msg: 'Orden actualizada correctamente.'})
    } catch (error) {
        res.status(500).send({msg: 'Error interno del servidor.', error})
    }
}

const getOrdensUser = async (req, res   ) => {
    const { userId: id } = req.params

    try {
        const user = await modelUsers.findByPk(id)
        if (!user) return res.status(200).send({msg: `No existe el usuario ${id} en la base de datos.`})

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
        res.status(500).send({msg: 'Error interno del servidor.', error})
    }
}

module.exports = {
    getOrdens,
    createOrden,
    updateOrden,
    getOrdensUser
}