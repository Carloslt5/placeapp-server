const router = require("express").Router()
const { getAllUsers, getOneUser, editUser, deleteUser } = require('../controllers/users.controllers')
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const { checkUserOwner } = require("../middlewares/checkUserOwner")


router.get('/getAllUsers', getAllUsers)

router.get('/:id', isAuthenticated, getOneUser)

router.put('/:id/edit', isAuthenticated, checkUserOwner, editUser)

router.delete('/:id/delete', isAuthenticated, deleteUser)


module.exports = router