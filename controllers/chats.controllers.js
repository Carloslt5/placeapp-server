const router = require("express").Router()
const Message = require("../models/Message.model")


const getAllMessages = (req, res, next) => {

    Message
        .find()
        .sort({createdAt: -1})
        .limit(10)
        .populate('owner')
        .then(messages => res.json(messages))
        .catch(err => next(err))

}

const createMessage = (req, res, next) => {
    
    const {_id} = req.payload
    const {message} = req.body
    
    console.log("USER----", _id)
    console.log("MENSAJE----", message)

    Message
        .create({ message: message, owner: _id})
        .then(createdMessage => res.json(createdMessage))
        .catch(err => next())
}


module.exports = {
    getAllMessages,
    createMessage
}