const router = require("express").Router(); 
const stripeAPI = require("../stripe"); 
const bodyParser = require('body-parser'); 
const express = require('express'); 
router.post("/", async(req, res) => {             
    console.log(req)                                      
    const domainUrl = process.env.WEB_APP_URL;                    
    const {line_items, customer_email} = req.body;  
    console.log(line_items);  
    if(!line_items || !customer_email) {
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
    console.log(session.line_items)

        res.status(200).json({sessionId: session.id, }) 
    } catch(error) { 
       console.log(error); 
       res.status(400).json({error: "An error, unable to create session"})
    }
})
let  endpointSecret; 
endpointSecret= "whsec_3e42f6028334467286829988a213d2da02fdb06a1af2bb04e0c3fb5d15b566a2";
router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  let data; 
  let eventType;

  if(endpointSecret){ 
      let event; 
    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object; 
      eventType = event.type;
  } else {
      data = req.body.data.object;  
      eventType = req.body.type;
  }  
 
  if(eventType === "checkout.session.completed")

  response.send().end();
});

 


module.exports = router;