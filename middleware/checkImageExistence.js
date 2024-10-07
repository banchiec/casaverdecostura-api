const Product = require("../models/product.model");
const fs = require("fs");

const checkImageExistence = async (req, res, next) => {
  const images = req.files.map((file) => file.path);

  try {
    const existingImage = await Product.findOne({
      "images.url": { $in: images },
    });
    if (existingImage) {
      // Remove the newly uploaded images if any of them already exist in the database
      images.forEach((imagePath) => {
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error(`Failed to delete image: ${imagePath}`, err);
          }
        });
      });
      return res
        .status(400)
        .json({ error: "One or more images already exist in the database" });
    }
    next();
  } catch (error) {
    // Handle any errors that occur during the database query
    images.forEach((imagePath) => {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Failed to delete image: ${imagePath}`, err);
        }
      });
    });
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = checkImageExistence;
