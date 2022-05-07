const router = require('express').Router()
const Product = require('../models/Product.model')

router.get('/',(req, res) => {
	try {
		Product.find() 
		.populate("beloning.idCategory")
		.then((data)=>{
			return res.status(200).json(data)
		})
		.catch(error => console.log(error))
	} catch (error) {
		console.log(error);
	}
})
 
 
router.get('/:id', async(req, res) => {
    const {id} = req.params;  
     try { 
         const product = await Product.findById(id) 
         return !product ?
             res.status(402).json("Product not found") :
             res.status(200).json(product)
         
     } catch (error) {
         return res.status(500).json(error)
     }
})



router.post('/', async (req, res) => {
	const { name } = req.body
	if(name){
		try{
			const product = await Product.findOne({ name })
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

 
router.get('/:id', async(req, res) => {
    const {id} = req.params;  
     try { 
         const product = await Product.findById(id) 
         return !product ?
             res.status(402).json("Product not found") :
             res.status(200).json(product)
         
     } catch (error) {
         return res.status(500).json(error)
     }
})

module.exports=router