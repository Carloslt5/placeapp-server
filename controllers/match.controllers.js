
const Place = require('../models/Place.model')
//const Comment = require('./../models/Comment.model')
const User = require('./../models/User.model')


const getMatchPlaces = (req, res, next) => {

    const { profileId } = req.params

    const { _id: userId } = req.payload

    User
        .find({ _id: { $in: [profileId, userId] } })
        .then((result) => {

            const arrOne = result[0].favouritePlaces.map(placeId => placeId.toString())
            const arrTwo = result[1].favouritePlaces.map(placeId => placeId.toString())

            const commonPlaces = arrOne.filter(placeId => arrTwo.includes(placeId))

            const promises = commonPlaces.map(place => {
                return Place.findById(place).then(result => result)
            })

            return Promise.all(promises)

        })
        .then((results) => {
            console.log('SEGUNDO THENNN', results)
            res.json({ results })
        })
        .catch(err => next(err))

    res.json('ESTOY EN EL MATCH')

}


module.exports = {
    getMatchPlaces
}