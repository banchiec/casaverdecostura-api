const express = require("express");  
const router = express.Router();   
const User = require("./../models/User.model"); 


router.get('/', async(req, res) => {
	try { 
		const users = await User.find() 
		return res.status(200).json(users)
	} catch (error) { 
		return res.status(500).json(error)
	}
}) 
 



router.get('/:id' , async(req, res) => {

    const { id } = req.params;   
    try { 
         
        const category = await User.findById(id) 
        return !category ?
        res.status(500).json("category is not found") : 
        res.status(200).json(category) 
        
    } catch (error) {  
        return res.status(500).json(error)
    }
})   
  


router.post('/new', async(req, res) => {
    const {name, subUser} = req.body; 
     try { 
            
        const category = await User.findOne({name}) 
         
        if(!category){
            const newUser = await User.create(req.body) 
            console.log(newUser) 
            return res.status(200).json(newUser)
        }else{
            return res.status(500).json("User exist")
        }
     } catch (error) { 
         return res.status(500).json(error)         
     }
}) 

router.delete('/:id', async(req, res) => { 
     
    const { id } = req.query

    const category = await User.findById(id) 
    if(!category){
        res.status(500).json("category  is not exist")
    } else{
        const deleteUser = await User.deleteOne({id}) 
        res.status(422).json('Remove category', deleteUser)
    }
})  
 

router.put('/:id', async(req, res) => { 
    const { name, subUser } = req.body 
    const { id } = req.query

    try { 
        const updateUser = await User.findByIdAndUpdate(id , {name , subUser}) 
        return !updateUser ? 
        res.status(402).json("User not update") :
        res.status(200).json(updateUser)
    } catch (error) { 
        res.status(500).json("User not found")        
    }
})
 
 

module.exports = router; 
