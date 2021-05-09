const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: Number,
  oldPrice: Number,
  rating: Number,
  reviews: Number,
  inStock: Boolean,
  fastDelivery: Boolean,
  description: String,
  shortDescription: String,
  petType:String,
  category:String,
  brand:String,
})

module.exports = mongoose.model("Product",productSchema)