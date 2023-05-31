const Place = require('./../models/Place.model')
const axios = require('axios')
const placesApiHandler = require('../services/places.services')
const photosPlacesApiHandler = require('../services/photos.places.services')

const getAllPlaces = (req, res, next) => {

    res.json("PLACES soy /getAllPlaces")

}

const getOnePlace = (req, res, next) => {

    const { id } = req.params

    placesApiHandler
        .getDetailsPlace(id)
        .then(({ data: { result } }) => {
            return result
        })
        .then((result) => {

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
            } = result

            return place_id
            
            photosPlacesApiHandler
                .getPhotosPlaces(result.photos[0].photo_reference)
                .then((response)=> {
                    return cresponse.request.res.responseUrl
                    // console.log("LA PUTA FOTITO DE LOS COJONES", response.request.res.responseUrl)  
                })

        })
        .catch(err => next(err))

        console.log("place id fuera-----", place_id)

            const formattedPlace = {
                placeId: place_id || 'data not available',
                name: '',
                description: editorial_summary?.overview || 'data not available',
                placeImg: '',
                photoReference: photos[0].photo_reference || 'data not available',
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
            placeId, name, description, placeImg, photoReference, type,
            phone, weekDay, addressComponents, userRating, userOpinion, owner, comments
        })
        .then(response => console.log("Place creado en BBDD con EXITAZO!!!!", response))
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