const placesApiHandler = require('../services/places.services')
const photosPlacesApiHandler = require('../services/photos.places.services')
const Place = require('./../models/Place.model')
const User = require('./../models/User.model')



const getAllPlaces = (req, res, next) => {

    Place
        .find()
        .sort({ name: 1 })
        .then(foundPlaces => res.json(foundPlaces))
        .catch(err => next(err))

}


const getUserPlaces = (req, res, next) => {

    const { id } = req.params

    Place
        .find({ owner: id })
        .then(foundPlacesByUser => res.json(foundPlacesByUser))
        .catch(err => next(err))

}

const getDetailsPlace = (req, res, next) => {

    const { id } = req.params


    Place
        .findById(id)
        .populate("owner")
        .then(foundPlace => res.json(foundPlace))
        .catch(err => next(err))

}

const getOnePlace = (req, res, next) => {

    const { id } = req.params

    return placesApiHandler
        .getDetailsPlace(id)
        .then(({ data: { result } }) => result)
        .then((placesDetailsResult) => {

            const {
                place_id,
                name,
                editorial_summary,
                photos,
                international_phone_number,
                current_opening_hours,
                address_components,
                formatted_address,
                geometry
            } = placesDetailsResult

            return photosPlacesApiHandler
                .getPhotosPlaces(placesDetailsResult.photos[0].photo_reference)
                .then((photoPlacesResult) => {

                    const urlPhotoResult = photoPlacesResult.request.res.responseUrl

                    const formattedPlace = {
                        placeId: place_id || 'data not available',
                        name: '',
                        description: editorial_summary?.overview || 'data not available',
                        placeImg: '',
                        photoReference: urlPhotoResult || 'data not available',
                        type: '',
                        phone: international_phone_number || 'data not available',
                        weekDay: current_opening_hours?.weekday_text || 'data not available',
                        city: address_components[2]?.long_name || 'data not available',
                        address: formatted_address || 'data not available',
                        latitude: geometry?.location.lat || 'data not available',
                        longitude: geometry?.location.lng || 'data not available',
                        userRating: '',
                        userOpinion: '',
                        owner: '',
                        comments: []
                    }

                    res.json(formattedPlace)

                })

        })
        .catch(err => next(err))

}

const createPlace = (req, res, next) => {

    const {
        placeId,
        name,
        description,
        placeImg,
        photoReference,
        type,
        phone,
        weekDay,
        city,
        address,
        latitude,
        longitude,
        userRating,
        userOpinion,
        owner,
        comments
    } = req.body

    const addressComponents = {
        city: city,
        address: address,
        location: {
            type: 'Point',
            coordinates: [latitude, longitude]
        }
    }

    Place
        .create({
            placeId,
            name,
            description,
            placeImg,
            photoReference,
            type,
            phone,
            weekDay,
            addressComponents,
            userRating,
            userOpinion,
            owner,
            comments
        })
        .then(response => console.log("Place creado en BBDD con EXITAZO!!!!", response))
        .catch(err => next(err))

}

const editPlace = (req, res, next) => {

    const { id } = req.params;

    const { type, userRating, userOpinion } = req.body

    Place
        .findByIdAndUpdate(id, { type, userRating, userOpinion }, { new: true })
        .then(foundUser => res.json(foundUser))
        .catch(err => next(err));

}

const addFavouritesPlace = (req, res, next) => {

    const { id } = req.params
    const { _id } = req.body

    User
        .findByIdAndUpdate(_id, { $addToSet: { favouritePlaces: id } }, { new: true })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))

}

const deletePlace = (req, res, next) => {

    res.json("PLACES soy /:id/delete")

}


module.exports = {
    getAllPlaces,
    getUserPlaces,
    getDetailsPlace,
    createPlace,
    getOnePlace,
    editPlace,
    addFavouritesPlace,
    deletePlace
}