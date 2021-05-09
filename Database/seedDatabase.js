const mongoose = require("mongoose")
const Product = require("../Models/Products");
const {productsData} = require("./data");
const faker = require("faker")
faker.seed(123)
function seedProductsData(){
  productsData.map((product) => {
    let products= product
   let newProduct = new Product(products)
    newProduct.save();
  })
  
  }

const deleteProducts = () => {
  Product.deleteMany({}, function(err){
    if("err"){
      console.log(err);
    }else{
      console.log("Deleted Products")
    }
  })
}
module.exports = {deleteProducts, seedProductsData};