const router = require('express').Router()
const Product = require('../models/Product.model')

router.get('/',(req, res) => {
	try {
	} catch (error) {
		console.log(error);
	}
})
import Product from '../../../models/product.model'

const newProduct = async (req, res) => {
    if (req.method === 'POST') {
        const { name } = req.body
        console.log(req.body)
        if (name) {
            try {
                // check is exist User
                const product = await Product.findOne({ name })
                if (!product) {
                    const newProduct = new Product(req.body)
                    await Product
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
                    return res.status(500).json("Producto ya registrado")
                }

            } catch (error) {
                return res.status(500).json(error)
            }
        } else {
            res.status(422).json('data_imcomplete')
        }
    }
    else {
        res.status(422).send('req_method_not_supported')
    }
}
export default connectDB(newProduct)


module.exports=router