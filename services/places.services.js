const axios = require('axios')

class PlacesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://maps.googleapis.com/maps/api/place'
        })
    }

    getDetailsPlace(place_id) {
        return this.axiosApp.get(`details/json?place_id=${place_id}&key=AIzaSyBIip4XUzH0gI5Hs2xkeNp4WCOsrjwHhpk`)
    }



}

const placesApiHandler = new PlacesApiHandler()

module.exports = placesApiHandler
