const axios = require('axios')
const apiKey = process.env.GOOGLE_API_KEY

class PhotosPlacesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://maps.googleapis.com/maps/api/place'
        })
    }

    getPhotosPlaces(photo_reference) {
        return this.axiosApp.get(`/photo?maxwidth=500&photo_reference=${photo_reference}&key=${apiKey}`)
    }

}

const photosPlacesApiHandler = new PhotosPlacesApiHandler()

module.exports = photosPlacesApiHandler

