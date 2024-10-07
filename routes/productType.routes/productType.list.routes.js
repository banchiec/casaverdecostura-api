const express = require('express')
const router = express.Router()
const ProductType = require('../../models/productType.model')

router.get('/', async (req, res) => {
	try {
		const productType = await ProductType.find()
		res.status(200).json(productType)
	} catch (error) {
		res.status(500).json(new Error({ error: error.message }()))
	}
})

module.exports = router
