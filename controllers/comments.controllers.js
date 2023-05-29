const createComment = (req, res, next) => {

    res.json("soy api/comments/create")

}

const editComment= (req, res, next) => {

    res.json("soy api/comments/:id/edit")

}

const deleteComment = (req, res, next) => {

    res.json("soy api/comments/:id/delete")

}
module.exports = {
    createComment,
    editComment,
    deleteComment
}