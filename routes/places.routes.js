const router = require("express").Router()
const { getAllPlaces, createPlace, getOnePlace, editPlace, addFavouritesPlace, deletePlace } = require('../controllers/places.controllers')


router.get('/getAllPlaces', getAllPlaces)

router.post('/createPlace', createPlace)

router.get('/:id', getOnePlace)

router.put('/:id/edit', editPlace)

router.post('/:id/favourites', addFavouritesPlace)

router.delete('/:id/delete', deletePlace)


module.exports = router
