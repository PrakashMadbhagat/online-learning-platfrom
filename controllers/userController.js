const User = require('../models/User');

const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(201).json({ message: 'Fetch Successfully.', user })
    } catch (error) {
        res.status(500).json({ message: 'Fetching User.', error: error.message })
    }
}
const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id , req.body , {new : true});
        res.status(201).json({ message: 'Update Successfully.', user })
    } catch (error) {
        res.status(500).json({ message: 'updating User.', error: error.message })
    }
}
const deleteUpdate = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id);
        res.status(201).json({ message: 'Fetch Successfully.', user })
    } catch (error) {
        res.status(500).json({ message: 'Fetching User.', error: error.message })
    }
}

module.exports = { getUser , updateUser , deleteUpdate }