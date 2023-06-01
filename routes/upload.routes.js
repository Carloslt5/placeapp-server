const router = require('express').Router()
const uploaderMiddleware = require('../middlewares/uploader.middleware')


router.post('/image', uploaderMiddleware.single('imageData'), (req, res) => {

  console.log('esta es la imagen que estoy subiendoASASJCBJASBCJASBCJSAC', imageForm)


  if (!req.file) {
    res.status(500).json({ errorMessage: 'Error cargando el archivo' })
    return
  }

  res.json({ cloudinary_url: req.file.path })

})


module.exports = router