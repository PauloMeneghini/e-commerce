const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        size: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: false
        },
        value: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: false
        }
    }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product