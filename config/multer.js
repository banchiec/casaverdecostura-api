const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const baseUrl = req.baseUrl
		const fileName = baseUrl.split('/')[2]
		console.log(fileName, 'fileName')

		cb(null, `uploads/${fileName}`)
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`)
	},
})

const upload = multer({ storage })

module.exports = upload
