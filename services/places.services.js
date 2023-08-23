const axios = require('axios')
const apiKey = process.env.GOOGLE_API_KEY


class PlacesApiHandler {

  constructor() {
    this.axiosApp = axios.create({
      baseURL: 'https://maps.googleapis.com/maps/api/place'
    })
  }

  getDetailsPlace(place_id) {
    return this.axiosApp.get(`details/json?place_id=${place_id}&key=${apiKey}`)
  }

}

const placesApiHandler = new PlacesApiHandler()

module.exports = placesApiHandler
