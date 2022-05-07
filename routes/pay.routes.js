const router = require("express").Router();  
const stripeAPI = require("../stripe");
 

router.post("/", async(req, res) => { 
    
    const domainUrl = process.env.WEB_APP_URL;
    const {line_items, customer_email} = req.body; 
    console.log(line_items, customer_email)
     
    if(!line_items || customer_email) {
        return res.status(400).json({error: "missing required  session parametrs"})
    }
 
    let session;  

    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ["card"], 
            mode: "payment", 
            line_items, 
            customer_email, 
            success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`, 
            cancel_url: `${domainUrl}/canceled`
        }); 
        res.status(200).json({sessionID: session.id})
    } catch(error) { 
       console.log(error); 
       res.status(400).json({error: "An error, unable to create session"})
    }


})
 


module.exports = router;