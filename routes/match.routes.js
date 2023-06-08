const router = require("express").Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")
const { getMatchPlaces, getMatchPlacesGroups } = require('../controllers/match.controllers')


router.get('/:profileId', isAuthenticated, getMatchPlaces)
router.post('/groups', isAuthenticated, getMatchPlacesGroups)


module.exports = router