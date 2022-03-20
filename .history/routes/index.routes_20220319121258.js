const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require('./product.routes')
const categoryRoutes = require('./category.routes')
const purchaseRoutes = require('./category.routes')
const commentRoutes = require('./comment.routes')
const discountRoutes = require('./discounts.routes')

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
routes.use('/products', productRoutes);


module.exports = router;
