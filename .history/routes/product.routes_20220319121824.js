const router = require('express').Router()

router.get("/", (req, res, next) => {
  res.json("Products");
});

module.exports=router