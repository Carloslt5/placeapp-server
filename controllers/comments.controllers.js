
const Place = require('../models/Place.model')
const Comment = require('./../models/Comment.model')


const getAllComments = (req, res, next) => {

    res.json("soy api/comments/:id")

}

const createComment = (req, res, next) => {

    const { content, owner } = req.body

    Comment
        .create({ content, owner })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const editComment = (req, res, next) => {

    const { commentId, commentData: content } = req.body

    Comment
        .findByIdAndUpdate(commentId, { content }, { new: true })
        .then(foundComment => res.json(foundComment))
        .catch(err => next(err))

}

const addCommentToPlace = (req, res, next) => {

    const { id } = req.params
    const { commentId } = req.body

    Place
        .findByIdAndUpdate(id, { $addToSet: { comments: commentId } }, { new: true })
        .then(updatePlace => res.json(updatePlace))
        .catch(err => next(err))

}


const deleteComment = (req, res, next) => {

    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))

}


module.exports = {
    getAllComments,
    createComment,
    editComment,
    addCommentToPlace,
    deleteComment
}