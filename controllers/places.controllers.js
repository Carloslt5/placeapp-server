const Place = require('./../models/Place.model')
const axios = require('axios')

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

    const { id } = req.params
    console.log(id)


    axios
        .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=AIzaSyBIip4XUzH0gI5Hs2xkeNp4WCOsrjwHhpk`)
        .then(({ data }) => {




            res.json(data.result)
        })
        .catch(err => next(err))


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