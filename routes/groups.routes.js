const router = require("express").Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")
const { getAllGroups, getOneGroup, joinGroup, deleteGroup, unjoinGroup, createGroup } = require('../controllers/groups.controllers')


router.get('/', getAllGroups)
router.get('/:id', getOneGroup)
router.post('/create', createGroup)
router.put('/:id/join', isAuthenticated, joinGroup)
router.put('/:id/unjoin', isAuthenticated, unjoinGroup)
router.delete('/:id/delete', deleteGroup)


module.exports = router