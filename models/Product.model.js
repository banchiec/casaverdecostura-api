const { Schema, model } = require('mongoose')

const productSchema = new Schema(
	{
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
			},
		},
		description: {
			type: String,
		},
		size: [
			{
				type: String,
				default: ['XL, XXL, L, M'],
			},
		],
		photos: [
			{
				url: {
					type: String,
				},
				color: {
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
