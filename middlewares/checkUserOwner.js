const User = require("../models/User.model")

const checkUserOwner = (req, res, next) => {

    const {_id: userId} = req.payload
    const {id: profileId} = req.params

    User
        .checkOwnerForUser(userId, profileId)
        .then(count => {

            count ? next() : res.status(401).json({errorMessages: ['No eres el dueño de este perfil']})
            
        })
        .catch(err => console.log(err))
}

module.exports = {checkUserOwner}