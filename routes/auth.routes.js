const router = require("express").Router()

router.post('/login', (req, res, next) => {

    res.json("SOY api/auth/login")

})

router.post('/signup', (req, res, next) => {

    res.json("SOY api/auth/signup")

})

router.get('/verify', (req, res, next) => {

    res.json("SOY api/auth/verify")

})



module.exports = router