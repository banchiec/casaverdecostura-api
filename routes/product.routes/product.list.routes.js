const express = require('express')
const router = express.Router()
const Product = require('../../models/product.model')

router.get('/', async (req, res, next) => {
	try {
		const products = await Product.find()
		if (products) {
			res.status(200).json(products)
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

module.exports = router
