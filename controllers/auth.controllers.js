const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const saltRounds = 10
const User = require('../models/User.model')



const signup = (req, res, next) => {

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
}

const login = (req, res, next) => {

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

        const { _id, email, name, lastName, avatar } = foundUser;

        const payload = { _id, email, name, lastName, avatar }

        const authToken = jwt.sign(
          payload, 
          process.env.TOKEN_SECRET, 
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.json({ authToken: authToken }); 
      }
      else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }

    })
    .catch(err => next(err));

}

const verify = (req, res, next) => {

      res.status(200).json(req.payload)

}

module.exports = {
    signup,
    login,
    verify

}