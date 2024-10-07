const express = require('express')
const router = express.Router()
const Category = require('../../models/category.model.js')
const upload = require('../../config/multer.js')

router.get('/', async (req, res) => {
	try {
		const categories = await Category.find().populate('productType')
		console.log(categories)
		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

router.post('/', upload.single('image'), async (req, res) => {
	try {
		const { name, description, available, productType } = req.body
		const imagePath = req.file ? req.file.path : null

		const productTypeArray = productType.split(',')

		console.log(req.body)
		const category = new Category({
			name: name,
			description: description,
			image: imagePath,
			available: available,
			productType: [...productTypeArray],
		})

		await category.save()
		res.status(200).json(category)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

module.exports = router
