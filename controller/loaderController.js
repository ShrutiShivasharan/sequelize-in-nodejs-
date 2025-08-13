const { Products, Orders, sequelize } = require('../models')

//transaction example
const addOrders = async (req, res) => {
    try {
        const { productId, name, price } = req.body;

        await sequelize.transaction(async (t) => {
            const productData = await Products.findOne({
                where: { id: productId },
                transaction: t,
                lock: t.LOCK.UPDATE
            });

            if (!productData) throw new Error("Product not Found");
            if (productData.stock < 1) throw new Error("Out of stock");

            await Orders.create({ productId, name, price }, { transaction: t });
            await Products.update(
                { stock: productData.stock - 1 },
                { where: { id: productId }, transaction: t }
            );
        });
        res.status(201).json({ message: "Order added!!" });

    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}












//Enger loading
const getProductWithOrders = async (req, res) => {
    try {
        const productData = await Products.findAll({
            include: [{ model: Orders, as: 'orders' }]
        })
        res.status(201).json(productData);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}
//lazy loading
const getProductWithOrders2 = async (req, res) => {
    try {
        const productData = await Products.findAll()
        res.status(201).json(productData);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}
const getOdersByProductId3 = async (req, res) => {
    try {
        const productData = await Products.findAll()
        res.status(201).json(productData);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}




module.exports = { getProductWithOrders, addOrders };