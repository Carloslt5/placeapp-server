const Place = require("../models/Place.model")

const checkPlaceOwner = (req, res, next) => {

    const {_id: userId} = req.payload
    const {id: placeId} = req.params

    Place
        .checkOwnerForPlace(userId, placeId)
        .then(count => {

            count ? next() : res.status(401).json({errorMessages: ['No eres el dueño']})
            
        })
        .catch(err => console.log(err))
}

module.exports = {checkPlaceOwner}