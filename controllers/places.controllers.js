const Place = require('./../models/Place.model')
const axios = require('axios')

const getAllPlaces = (req, res, next) => {

    res.json("PLACES soy /getAllPlaces")

}
const createPlace = (req, res, next) => {

    const { placeId,name, description, placeImg, photoReference,type,
        phone, weekDay, city,address, latitude, longitude, userRating,
        userOpinion, owner, comments} = req.body
        console.log('esto es el type que llega a back',type)

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

const getOnePlace = (req, res, next) => {

    const { id } = req.params
    //console.log("ID DEL LUGAR-----", id)


    axios
        .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=AIzaSyBIip4XUzH0gI5Hs2xkeNp4WCOsrjwHhpk`)
        .then(({ data }) => {

            const formattedPlace = {
                placeId: data.result.place_id || 'data not available',
                name: data.result.name || 'data not available',
                description: data.result.editorial_summary?.overview || 'data not available',
                placeImg: '',
                photoReference: data.result.photos[0].photo_reference || 'data not available',
                type: '',
                phone: data.result.international_phone_number || 'data not available',
                weekDay: data.result.current_opening_hours?.weekday_text || 'data not available',
                city: data.result.address_components[2]?.long_name || 'data not available',
                address: data.result.formatted_address || 'data not available',
                latitude: data.result.geometry?.location.lat || 'data not available',
                longitude: data.result.geometry?.location.lng || 'data not available',
                userRating: '',
                userOpinion: '',
                owner: '',
                comments: []
            }

           // console.log("ESTO ES LA DATA DEL CONTROLADOR DEL BACKEND----", formattedPlace)

            res.json(formattedPlace)
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