const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')


const signup = (req, res, next) => {

  const { name, lastName, email, password, avatar} = req.body

    User
   .create({ name, lastName, email, password, avatar })
   .then(() => res.sendStatus(201))
   .catch(err => res.sendStatus(500))

}


const login = (req, res, next) => {

  const { email, password } = req.body

  if (email === '' || password === '') {
    res.status(400).json({ errorMessages: ["Provide email and password."] })
    return
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (!foundUser) {
        res.status(401).json({ errorMessages: ["User not found."] })
        return
      }

      if (bcrypt.compareSync(password, foundUser.password)) {

        const { _id, name, lastName, email, role } = foundUser

        const payload = { _id, name, lastName, email, role }

        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.json({ authToken: authToken })

      } else {
        res.status(401).json({ errorMessages: ["Unable to authenticate the user"] })
      }

    })
    .catch(err => res.sendStatus(500))

}

const verify = (req, res, next) => {

  res.status(200).json(req.payload)

}


module.exports = {
  signup,
  login,
  verify

}