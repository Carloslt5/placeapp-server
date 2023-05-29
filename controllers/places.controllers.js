
const getAllPlaces = (req, res, next) => {

    res.json("PLACES soy /getAllPlaces")

}
const createPlace = (req, res, next) => {

    res.json("PLACES soy /createPlace")

}
const getOnePlace = (req, res, next) => {

    res.json("PLACES soy /:id`")

}
const editPlace = (req, res, next) => {

    res.json("PLACES soy /:id/edit")

}

const  addFavouritesPlace = (req, res, next) => {

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