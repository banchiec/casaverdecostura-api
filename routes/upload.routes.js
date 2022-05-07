const express = require("express");
const router = express.Router();
const uploader = require('../config/upload.config')

router.post('/image', uploader.single("photo"), (req, res,  next ) => { 
    console.log(req.file)
        if (!req.file) {
          next(new Error('No file uploaded!'));
          return;
        }
        // get secure_url from the file object and save it in the 
        // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
        res.json( {cloudinary_url: req.file.path});
}) 

router.post('/profile', uploader.single("photo_profile"), (req, res) => {

    if (!req.file) {
        res.status(500).json({ code: 500, message: 'Error loading the file' })
        return
    }
    console.log(req.body)
    res.json({ cloudinary_url: req.file.path })


})


module.exports = router