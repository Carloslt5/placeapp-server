const router = require("express").Router();

router.use("/places", require('./places.routes'))
router.use("/users", require('./users.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/comments", require('./comments.routes'))
router.use("/upload", require('./upload.routes'))

module.exports = router