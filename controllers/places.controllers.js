const Place = require('./../models/Place.model')


const getAllPlaces = (req, res, next) => {

    res.json("PLACES soy /getAllPlaces")

}
const createPlace = (req, res, next) => {




    const { placeId, name, description, placeImg, photoReference, type,
        phone, weekDay, addressComponents, userRating, userOpinion, owner, comments } = req.body

    Place
        .create({
            placeId, name, description, placeImg, photoReference, type,
            phone, weekDay, addressComponents, userRating, userOpinion, owner, comments
        })
        .then(response => res.json(response))
        .catch(err => next(err))

}
const getOnePlace = (req, res, next) => {

    res.json("PLACES soy /:id`")

}
const editPlace = (req, res, next) => {

    res.json("PLACES soy /:id/edit")

}

const addFavouritesPlace = (req, res, next) => {

    res.json("PLACES soy /:id/favourites")

}

const deletePlace = (req, res, next) => {

    res.json("PLACES soy /:id/delete")

}


module.exports = {
    getAllPlaces,
    createPlace,
    getOnePlace,
    editPlace,
    addFavouritesPlace,
    deletePlace
}