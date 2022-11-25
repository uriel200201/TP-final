const ProductoModel = require('../../models/producto.models')

const addProductService = async (req) => {
	const producto = req.body
	const newProduct = new ProductoModel(producto)
	await newProduct.save()
	return producto
}

module.exports = addProductService
