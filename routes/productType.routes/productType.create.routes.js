const express = require('express')
const router = express.Router()
const ProductType = require('../../models/productType.model.js')
const upload = require('../../config/multer.js')

router.post('/', upload.single('image'), async (req, res) => {
	try {
		const { name, description } = req.body
		const imagePath = req.file ? req.file.path : null

		const existsProductType = await ProductType.findOne({ name: name })
		if (!existsProductType) {
			const productType = new ProductType({ name, description, image: imagePath })
			await productType.save()
			res.status(200).json(productType)
		} else {
			throw new Error('Product type exists in DB')
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

module.exports = router
