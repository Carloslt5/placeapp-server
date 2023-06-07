
const Place = require('../models/Place.model')
const User = require('./../models/User.model')
const { getCommonPlacesId } = require('../utils/GetCommonPlaces.helpers')


const getMatchPlaces = (req, res, next) => {

    const { profileId } = req.params

    const { _id: userId } = req.payload

    User
        .find({ _id: { $in: [profileId, userId] } })
        .then((result) => {

            const arrOne = result[0].favouritePlaces.map(placeId => placeId.toString())
            const arrTwo = result[1].favouritePlaces.map(placeId => placeId.toString())
            const commonPlaces = arrOne.filter(placeId => arrTwo.includes(placeId))

            const eachPlaceId = getCommonPlacesId(commonPlaces)

            return Promise.all(eachPlaceId)

        })
        .then((eachPlace) => res.json(eachPlace))
        .catch(err => next(err))


}


module.exports = {
    getMatchPlaces
}