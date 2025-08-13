const { Users } = require("../models");

//get user 
const getUser = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//add user
const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const users = await Users.create({ name, email, password });
        res.status(201).json(users);
    } catch (err) {
        if (['SequelizeValidationError', 'SequelizeUniqueContraintError'].includes(err.name)) {
            return res.status(400).json({
                err: 'validation failed!',
                details: err.errors.map(e => ({ filed: e.path, message: e.message }))
            });
        }
        console.error(err);
        res.status(500).json({ error: "server error" });
    }
}

module.exports = { getUser, addUser };