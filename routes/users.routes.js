const router = require("express").Router()
const { getAllUsers, getOneUser, editUser, deleteUser } = require('../controllers/users.controllers')


router.get('/getAllUsers', getAllUsers)

router.get('/:id', getOneUser)

router.put('/:id/edit', editUser)

router.delete('/:id/delete', deleteUser)


module.exports = router