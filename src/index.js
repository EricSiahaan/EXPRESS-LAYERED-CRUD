const express = require('express');
const dotenv = require('dotenv');

const productController = require('../src/product/product.controller.js');

const app = express()

dotenv.config()

const PORT = process.env.PORT

app.use(express.json())

app.use('/products', productController)

app.listen(PORT, () => {
    console.log("Express API running in port : " + PORT)
})