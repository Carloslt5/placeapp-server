const router = require("express").Router()
const { getAllPlaces, getUserPlaces, getDetailsPlace, createPlace, getOnePlace, editPlace, addFavouritesPlace, deletePlace } = require('../controllers/places.controllers')


router.get('/getAllPlaces', getAllPlaces)

router.get('/:id/getUserPlaces', getUserPlaces)

//Obtenemos place de NUESTRA BBDD
router.get('/:id/getDetailsPlace', getDetailsPlace) 

router.post('/createPlace', createPlace)

//Obtenemos place de la API DE GOOGLE PLACES
router.get('/getOnePlace/:id', getOnePlace) 

router.put('/:id/edit', editPlace)

router.post('/:id/favourites', addFavouritesPlace)

router.delete('/:id/delete', deletePlace)


module.exports = router
