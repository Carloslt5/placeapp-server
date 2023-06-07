const router = require("express").Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")
const { getAllPlaces, getUserPlaces, getDetailsPlace, createPlace, getOnePlace, editPlace, addFavouritesPlace, removefavouritesPlace, deletePlace } = require('../controllers/places.controllers')
const { checkPlaceOwner } = require("../middlewares/checkPlaceOwner")


router.get('/getAllPlaces', getAllPlaces)

router.get('/:id/getUserPlaces', getUserPlaces)

router.get('/:id/getDetailsPlace', isAuthenticated, getDetailsPlace)

router.post('/createPlace', isAuthenticated, createPlace)

router.get('/getOnePlace/:id', isAuthenticated, getOnePlace)

router.put('/:id/edit', isAuthenticated, checkPlaceOwner, editPlace)

router.put('/:id/addfavourites', isAuthenticated, addFavouritesPlace)

router.put('/:id/removefavourites', isAuthenticated, removefavouritesPlace)

router.delete('/:id/delete', isAuthenticated, deletePlace)


module.exports = router
