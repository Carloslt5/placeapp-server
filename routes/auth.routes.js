const router = require("express").Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')


const saltRounds = 10


router.post('/signup',/* uploaderMiddleware.single('avatar'),*/(req, res, next) => {

    // const { path: avatar } = req.file
    const { name, lastName, email, password } = req.body

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ name, lastName, email, password: hashedPassword /*avatar: req.file?.path*/ })
        })
        .then((createdUser) => {

            const { name, lastName, email, _id } = createdUser
            const user = { name, lastName, email, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })
})


router.post('/login', (req, res, next) => {

   // res.json("SOY api/auth/login")

     // console.log('secretoo', process.env.TOKEN_SECRET)

  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (!foundUser) {
        res.status(401).json({ message: "User not found." })
        return;
      }

      if (bcrypt.compareSync(password, foundUser.password)) {

        const { _id, email, name, lastName, avatar } = foundUser; //guardar el avatar

        const payload = { _id, email, name, lastName, avatar }

        const authToken = jwt.sign(
          payload, //los datos que quieres almacenar
          process.env.TOKEN_SECRET, //tu variable del .env
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.json({ authToken: authToken }); //devuelves el token
      }
      else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }

    })
    .catch(err => next(err));

})


router.get('/verify', (req, res, next) => {

    res.json("SOY api/auth/verify")

})



module.exports = router