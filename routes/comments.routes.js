const router = require("express").Router()
const { getAllComments, createComment, editComment, deleteComment } = require('../controllers/comments.controllers')


router.get('/:id', getAllComments)

router.post('/create', createComment)

router.put('/:id/edit', editComment)

router.delete('/:id/delete', deleteComment)


module.exports = router