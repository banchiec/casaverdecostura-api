const upload = require('../../config/multer.js')

const uploadSingle = (req, res) => {
	const imagePath = req.file ? req.file.path : null
}

module.exports = uploadSingle
