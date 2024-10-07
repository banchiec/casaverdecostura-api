const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/categories/:image', async (req, res) => {
	const { image } = req.params
	res.sendFile(path.join(__dirname, `../../uploads/categories/${image}`))
})

router.get('/product-type/:image', async (req, res) => {
	const { image } = req.params
	res.sendFile(path.join(__dirname, `../../uploads/product-type/${image}`))
})

module.exports = router
