const router = require("express").Router()
const { getAllComments, createComment, editComment, addCommentToPlace, deleteComment } = require('../controllers/comments.controllers')


router.get('/:id', getAllComments)

router.post('/create', createComment)

router.put('/:id/edit', editComment)

router.put('/:id/addcomments', addCommentToPlace)

router.delete('/:id/delete', deleteComment)



module.exports = router