const express = require('express')
const router = express.Router()
const productTypeCreateRoutes = require('./productType.create.routes')
const productTypeListRoutes = require('./productType.list.routes')

router.use('/', productTypeCreateRoutes)
router.use('/', productTypeListRoutes)

module.exports = router
