const User = require('../models/User.model')

const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ name: 1, lastName: 1, avatar: 1, _id: 1 })
        .sort({ name: 1 })
        .then(foundUsers => res.json(foundUsers))
        .catch(err => next(err));

}

const getOneUser = (req, res, next) => {

    const { id } = req.params;

    User
        .findById(id)
        .populate('favouritePlaces')
        .then(foundUser => res.json(foundUser))
        .catch(err => next(err));

}

const editUser = (req, res, next) => {

    const { id } = req.params;

    const { name, lastName, email, avatar } = req.body

    User
        .findByIdAndUpdate(id, { name, lastName, email, avatar }, { new: true })
        .then(foundUser => res.json(foundUser))
        .catch(err => next(err))

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