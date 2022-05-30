const express = require("express");  
const router = express.Router();   
const Category = require("./../models/Category.model"); 


router.get('/', async(req, res) => {
    try { 
        const categories = await Category.find() 
        return res.status(200).json(categories)
    } catch (error) { 
        return res.status(500).json(error)
    }
}) 
  
router.get('/:id' , async(req, res) => {

    const { id } = req.params;   
    try { 
         
        const category = await Category.findById(id) 
        return !category ?
        res.status(500).json("category is not found") : 
        res.status(200).json(category) 
        
    } catch (error) {  
        return res.status(500).json(error)
    }
})   
  
router.post('/new', async(req, res) => {
    const {name, subCategory} = req.body; 
     try { 
            
        const category = await Category.findOne({name}) 
         
        if(!category){
            const newCategory = await Category.create(req.body) 
            console.log(newCategory) 
            return res.status(200).json(newCategory)
        }else{
            return res.status(500).json("Category exist")
        }
     } catch (error) { 
         return res.status(500).json(error)         
     }
}) 

router.delete('/:id', async(req, res) => { 
     
    const { id } = req.query

    const category = await Category.findById(id) 
    if(!category){
        res.status(500).json("category  is not exist")
    } else{
        const deleteCategory = await Category.deleteOne({id}) 
        res.status(422).json('Remove category', deleteCategory)
    }
})  
 

router.put('/:id', async(req, res) => { 
    const { name, subCategory } = req.body 
    const { id } = req.query

    try { 
        const updateCategory = await Category.findByIdAndUpdate(id , {name , subCategory}) 
        return !updateCategory ? 
        res.status(402).json("Category not update") :
        res.status(200).json(updateCategory)
    } catch (error) { 
        res.status(500).json("Category not found")        
    }
})
 
 

module.exports = router; 
