const { model, schema, mongoose } = require('mongoose')
const Float = require('mongoose-float').loadType(mongoose)

const ProductosSchema = new schema({
	idProducto: {
		type: Number,
		required: [true, 'El codigo del producto es obligatorio'],
		unique: true,
	},
	producto: {
		type: String,
		required: [true, 'El nombre del producto es obligatorio'],
	},
	precio: {
		type: Float,
		required: [true, 'El nombre del producto es obligatorio'],
	},
})

const ProductoModel = model('Producto', ProductosSchema)

module.exports = ProductoModel
