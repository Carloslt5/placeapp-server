
const Place = require('../models/Place.model')
const Comment = require('./../models/Comment.model')


const getAllComments = (req, res, next) => {

    // const { id } = req.params

    // Place
    // .findById(id)
    // .select({comments : 1})
    // .populate("comments")
    // .then(response => console.log("RESPUESTA DEL BACKEND---->", response))
    // .catch(err => next(err))


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

    const { commentId, commentData } = req.body

    Comment
        .findByIdAndUpdate(commentId, { content: commentData}, { new: true })
        .then(foundComment => res.json(foundComment))
        .catch(err => next(err));

}

const deleteComment = (req, res, next) => {

    const { id } = req.params
    console.log("ESTE ES EL ID DEL COMENTARIO A ELIMINAR----->", id)

       Comment
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err));

}


module.exports = {
    getAllComments,
    createComment,
    editComment,
    deleteComment
}