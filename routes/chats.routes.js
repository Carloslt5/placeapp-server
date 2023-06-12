const router = require("express").Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")
const { getAllMessages, createMessage } = require('../controllers/chats.controllers')


router.get('/', isAuthenticated, getAllMessages)
router.post('/create',isAuthenticated, createMessage)


module.exports = router