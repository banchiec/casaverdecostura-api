const router = require('express').Router()
const Product = require('../models/Product.model')

router.get('/',(req, res) => {
	try {
		Product.find()
		.then((data)=>{
			return res.status(200).json(data)
		})
		.catch(error => console.log(error))
	} catch (error) {
		console.log(error);
	}
})

router.post('/', (req, res) => {
	const { name } = req.body
	if(name){
		try{
			const product = Product.findOne({ name })
				if (!product) {
					const newProduct = new Product(req.body)
					Product
						.create(newProduct)
						.then((data) => {
								console.log(data)
								return res.status(200).json(data)
						})
						.catch((error) => {
								return res.status(500).json(error)
						})
			  }
				else {
					return res.status(500).json('product exist')
				}
		}
		catch(error){
			return res.status(500).json(error)
		}
	}else{
    res.status(422).json('name necesary')
	}
})

module.exports=router