const router = require("express").Router(); 
const Purchase = require("../models/Purchase.model"); 
 

router.post("/", async(req, res) => { 
    try {
        const newPurchase =  await Purchase.create(req.body);  
        return res.status(200).json(newPurchase) 
    } catch (error) {
        return res.status(500).json(error);
    }

})
 


module.exports = router;