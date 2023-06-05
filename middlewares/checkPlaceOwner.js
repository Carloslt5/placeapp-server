const Place = require("../models/Place.model")

const checkPlaceOwner = (req, res, next) => {

    const {_id: userId} = req.payload
    const {id: placeId} = req.params
    console.log("REQ.PARAMS--->", req.params)
    console.log("REQ.PAYLOAD--->", req.payload)
    
    Place
        .checkOwnerForPlace(userId, placeId)
        .then(count => {

            req.placeOwnerCount = count
            count ? next() : res.json({errorMessages: ['No eres el dueño']})

        })
        .catch(err => console.log(err))
}

module.exports = {checkPlaceOwner}