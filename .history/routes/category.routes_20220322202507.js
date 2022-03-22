const router = require('express').Router()
const Category = require('../models/Category.model')

router.get('/', async(req, res) => {
	try {
		 await Category.find()
		.then((data)=>{
			console.log(data.data);
			return res.status(200).json(data)
		})
		.catch(error => console.log(error))
	} catch (error) {
		console.log(error);
	}
})

module.exports = router