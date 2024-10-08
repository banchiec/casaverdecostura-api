const { Schema, model } = require('mongoose')

const productSchema = new Schema(
	{
		name: {
			type: String,
		},
		price: {
			type: Number,
		},
		quantity: {
			type: Number,
		},
		sale_price: {
			type: Number,
		},
		description: {
			type: String,
		},
		isNewArrival: {
			type: Boolean,
		},
		size: [
			{
				type: String,
				default: ['XL, XXL, L, M'],
			},
		],
		beloning: {
			idCategory: {
				type: Schema.Types.ObjectId,
				ref: 'Category',
			},
			subCategory: {
				type: String,
			},
		},
		photos: [
			{
				url: {
					type: String,
				},
			},
		],
		colors: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true }
)

const Product = model('Product', productSchema)

module.exports = Product
