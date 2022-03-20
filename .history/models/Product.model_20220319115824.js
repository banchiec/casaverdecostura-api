import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    beloning: {
        idCategory: {
            type: Schema.Types.ObjectId,
            ref: 'Category', 
        },
        subCategory: {
            type: String,
          
        }
    },
    description: {
        type: String, 
        required: true
       
    },
    size: [
        {
            type: String,
            default: ["XL, XXL, L, M"]
        }
    ],
    photos: [
        {
            url: {
                type: String, 
               
            },
            color: {
                type: String, 
               
            }
        }
    ],
    colors: [
        {
            type: String, 
           
        }
    ],
}, { timestamps: true })

global.Product = global.Product || model("Product", productSchema)
export default global.Product