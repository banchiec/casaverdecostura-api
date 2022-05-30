const express = require("express"); 
const router = express.Router();                               
const Blog = require("./../models/Blog.model")


router.get("/", async(req, res) => {  
    try {
       Blog.find() 
       .then((data) => {
           return res.status(200).json(data)
       })
        
    } catch (error) {
        return res.status(500).json(error)
    }
}) 
  

router.get("/:id", async(req, res) => {
    const {id} = req.params; 
    try {
     Blog.findById(id)
     .then((data) => {
         return res.status(200).json(data)
     })
    } catch (error) {
        return res.status(500).json(error)
    }
})


router.post("/new", async(req, res) => {
    const {name, title, subtitle, images, categories, firstsection, secondsection, thirdsection, fourthsection, fifthsection, sexthsection} = req.body; 
    console.log(req.body)
    try {
        Blog.create(req.body)  
        .then((data) => {
            console.log(data) 
            return res.status(200).json(data)
        })

        return 
    } catch (error) {
        return res.status(500).json(error);
    }
})


 
module.exports = router;
