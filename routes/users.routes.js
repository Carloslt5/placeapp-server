const router = require("express").Router()

router.get('/getAllUsers', (req, res, next) => {

    res.json("soy api/users/getAllUsers")

})

router.get('/:id', (req, res, next) => {

    res.json("soy api/users/:id")

})

router.put('/:id/edit', (req, res, next) => {

    res.json("soy api/users/edit")

})

router.delete('/:id/delete', (req, res, next) => {

    res.json("soy api/users/delete")

})


module.exports = router