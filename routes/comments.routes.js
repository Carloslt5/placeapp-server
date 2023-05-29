const router = require("express").Router()
const { createComment, editComment, deleteComment } = require('../controllers/comments.controllers')


router.post('/create', createComment)

router.put('/:id/edit', editComment)

router.delete('/:id/delete', deleteComment)


module.exports = router