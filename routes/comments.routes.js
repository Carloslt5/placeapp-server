const router = require("express").Router()

router.post('/create', (req, res, next) => {

    res.json("soy api/comments/create")

})

router.put('/:id/edit', (req, res, next) => {

    res.json("soy api/comments/:id/edit")

})

router.delete('/:id/edit', (req, res, next) => {

    res.json("soy api/comments/:id/delete")

})


module.exports = router