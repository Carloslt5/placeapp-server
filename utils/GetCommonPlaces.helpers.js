const Place = require('../models/Place.model')

function getCommonPlacesId(places) {
    return places.map(place => {
        return Place.findById(place).then(eachPlace => eachPlace)
    })
}

module.exports = { getCommonPlacesId }