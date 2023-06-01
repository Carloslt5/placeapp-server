const router = require("express").Router()
const { getAllPlaces, getUserPlaces, createPlace, getOnePlace, editPlace, addFavouritesPlace, deletePlace } = require('../controllers/places.controllers')


router.get('/getAllPlaces', getAllPlaces)

router.get('/:id/getUserPlaces', getUserPlaces)

router.post('/createPlace', createPlace)

router.get('/getOnePlace/:id', getOnePlace)

router.put('/:id/edit', editPlace)

router.post('/:id/favourites', addFavouritesPlace)

router.delete('/:id/delete', deletePlace)


module.exports = router
