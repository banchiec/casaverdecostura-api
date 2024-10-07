const express = require('express')
const router = express.Router()
const singleUploadRoutes = require('./single.upload.routes')

router.use('/', singleUploadRoutes)

module.exports = router
