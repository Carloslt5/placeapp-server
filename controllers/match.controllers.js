
const Place = require('../models/Place.model')
const Group = require('../models/Group.model')
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
const getMatchPlacesGroups = (req, res, next) => {

    const { myGroupId, allGroupId } = req.body

    Group
        .find({ _id: { $in: [myGroupId, allGroupId] } })
        .populate('members')
        .then((result) => {

            const arrGroupOne = result[0].members.map(userId => userId.favouritePlaces.map(elem => elem._id.toString())).flat()
            const arrGroupTwo = result[1].members.map(userId => userId.favouritePlaces.map(elem => elem._id.toString())).flat()

            const commonPlacesId = arrGroupOne.filter(placeId => arrGroupTwo.includes(placeId))

            const commonPlacesIdSet = new Set(commonPlacesId)

            const commonPlaces = getCommonPlacesId([...commonPlacesIdSet])

            return Promise.all(commonPlaces)

        })
        .then(commonPlaces => res.json(commonPlaces))
        .catch(err => {
            console.error(err)
            next(err)
        })


}


module.exports = {
    getMatchPlaces,
    getMatchPlacesGroups
}