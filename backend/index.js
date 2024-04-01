const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors());


app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`)
})

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated")
})

app.get("/api/products", async (req, res) => {
 try {
    const products = await Product.find({})
    res.status(200).json(products)
 } catch (error) {
    res.status(500).json({message: error.message})
 }
})

//Add a new product
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://paulohm7:k7rXZUy5v4gMTAWV@cluster0.equcrrs.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));