const router = require('express').Router()
const Category = require('../models/Category.model')

router.get('/', (req, res) => {
	try {
		Category.find()
		.then((data)=>{
			console.log(data);
			return res.status(200).json(data)
		})
		.catch(error => console.log(error))
	} catch (error) {
		console.log(error);
	}
})

module.exports = router