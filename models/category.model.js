const { Schema, model } = require('mongoose')

const CategorySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
		},
		available: {
			type: Boolean,
			default: true,
		},
		productType: [
			{
				type: Schema.Types.ObjectId,
				ref: 'ProductType',
				required: true,
			},
		],
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const Category = model('Category', CategorySchema)

module.exports = Category
