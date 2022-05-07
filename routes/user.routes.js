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
         
        const user = await User.findById(id) 
        return !user ?
        res.status(500).json("user is not found") : 
        res.status(200).json(user) 
        
    } catch (error) {  
        return res.status(500).json(error)
    }
})   
  


router.post('/new', async(req, res) => {
    const {name} = req.body; 
     try { 
      const user = await User.findOne({name}) 
      if(!user){
        const newUser = await User.create(req.body) 
        console.log(newUser) 
        return res.status(200).json(newUser)
      }else{
        return res.status(500).json("User exist")
      }
     }catch (error) { 
      return res.status(500).json(error)         
     }
}) 

router.delete('/:id', async(req, res) => { 
     
    const { id } = req.query

    const user = await User.findById(id) 
    if(!user){
        res.status(500).json("user  is not exist")
    } else{
        const deleteUser = await User.deleteOne({id}) 
        res.status(422).json('Remove user', deleteUser)
    }
})  
 

router.put('/:id', async(req, res) => { 
    const { name} = req.body 
    const { id } = req.query

    try { 
        const updateUser = await User.findByIdAndUpdate(id , {name , role, favorities}) 
        return !updateUser ? 
        res.status(402).json("User not update") :
        res.status(200).json(updateUser)
    } catch (error) { 
        res.status(500).json("User not found")        
    }
})
 
 

module.exports = router; 
