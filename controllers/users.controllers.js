const getAllUsers = (req, res, next) => {

    res.json("soy api/users/getAllUsers")

}

const getOneUser = (req, res, next) => {

    res.json("soy api/users/:id")

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