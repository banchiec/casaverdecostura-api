const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require('./product.routes')
const categoryRoutes = require('./category.routes')
const purchaseRoutes = require('./category.routes')
const commentRoutes = require('./comment.routes')
const discountRoutes = require('./discounts.routes')
const uploadRoutes = require('./upload.routes')
// router.use('/uploads', require('./uploads.routes'))

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/comments', commentRoutes);
router.use('/discounts', discountRoutes)
router.use('/uploads', uploadRoutes)

module.exports = router;
