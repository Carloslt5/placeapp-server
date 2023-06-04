
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
   // res.json("soy api/comments/create")

}

const editComment = (req, res, next) => {

    res.json("soy api/comments/:id/edit")

}

const deleteComment = (req, res, next) => {

    res.json("soy api/comments/:id/delete")

}


module.exports = {
    getAllComments,
    createComment,
    editComment,
    deleteComment
}