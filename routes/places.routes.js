const router = require("express").Router()
const { getAllPlaces, getUserPlaces, getDetailsPlace, createPlace, getOnePlace, editPlace, addFavouritesPlace, deletePlace } = require('../controllers/places.controllers')


router.get('/getAllPlaces', getAllPlaces)

router.get('/:id/getUserPlaces', getUserPlaces)

router.get('/:id/getDetailsPlace', getDetailsPlace) //con este obtenemos un place de nuestra DB

router.post('/createPlace', createPlace)

router.get('/getOnePlace/:id', getOnePlace) //con este obtenemos un place con detalles y foto de la API de GooglePlaces

router.put('/:id/edit', editPlace)

router.post('/:id/favourites', addFavouritesPlace)

router.delete('/:id/delete', deletePlace)


module.exports = router
