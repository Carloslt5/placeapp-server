const router = require("express").Router()

router.get('/getAllPlaces', (req, res, next) => {

    res.json("PLACES soy /getAllPlaces")

})

router.post('/createPlace', (req, res, next) => {

    res.json("PLACES soy /createPlace")

})

router.get('/:id', (req, res, next) => {

    res.json("PLACES soy /:id`")

})

router.put('/:id/edit', (req, res, next) => {

    res.json("PLACES soy /:id/edit")

})

router.post('/:id/favourites', (req, res, next) => {

    res.json("PLACES soy /:id/favourites")

})

router.delete('/:id/delete', (req, res, next) => {

    res.json("PLACES soy /:id/delete")

})


module.exports = router
