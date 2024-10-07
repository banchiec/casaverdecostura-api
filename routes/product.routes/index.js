const express = require("express");
const router = express.Router()
const productCreateRoutes = require("./product.create.routes")
const productListRoutes = require("./product.list.routes")

router.use("/", productCreateRoutes);
router.use("/", productListRoutes)

module.exports = router;