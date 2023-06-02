const User = require('../models/User.model')

const getAllUsers = (req, res, next) => {

    res.json("soy api/users/getAllUsers")

}

const getOneUser = (req, res, next) => {

    const { id } = req.params;

    User
        .findById(id)
        .then(foundUser => res.json(foundUser))
        .catch(err => next(err));

}

const editUser = (req, res, next) => {

    const { id } = req.params;

    const { name, lastName, email, avatar } = req.body

    User
        .findByIdAndUpdate(id, { name, lastName, email, avatar }, { new: true })
        .then(foundUser => res.json(foundUser))
        .catch(err => next(err));

}

const deleteUser = (req, res, next) => {

    const { id } = req.params;

    User
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err));

}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser,

}