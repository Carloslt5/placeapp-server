const router = require("express").Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")
const { getMatchPlaces } = require('../controllers/match.controllers')


router.get('/:profileId', isAuthenticated, getMatchPlaces)


module.exports = router