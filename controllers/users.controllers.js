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

    res.json("soy api/users/:id/edit")

}

const deleteUser = (req, res, next) => {

    res.json("soy api/users/:id/delete")

}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}