const router = require("express").Router()

router.use("/places", require('./places.routes'))
router.use("/users", require('./users.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/comments", require('./comments.routes'))
router.use("/upload", require('./upload.routes'))
router.use("/match", require('./match.routes'))
router.use("/groups", require('./groups.routes'))
router.use("/chat", require('./chats.routes'))

module.exports = router