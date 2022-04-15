import { Schema, model } from 'mongoose'

const purchaseSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: "User"
    },
    productId: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    }],
    discounts: [{
        type: Schema.Types.ObjectId,
    }],
    amount: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Purchase = model("Purchase", purchaseSchema);

module.exports = Purchase;