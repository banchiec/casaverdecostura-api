const router = require('express').Router()

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


module.exports=router