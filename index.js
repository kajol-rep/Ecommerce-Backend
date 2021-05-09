const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors());
const productRoutes = require("./Routes/product")
const {initializeDatabaseConnection} = require("./Database/initializeDatabaseConnection");

const {deleteProducts, seedProductsData} = require("./Database/seedDatabase")


initializeDatabaseConnection()
// seedProductsData();
// deleteProducts();
app.use("/products",productRoutes)

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.get('/*', (req, res) => {
  res.send('Oops! this page could not be found')
});

app.listen(3000, () => {
  console.log('server started');
});
