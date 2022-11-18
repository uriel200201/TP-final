const ProductoModel = require('../../models/producto.model')

const addProductService = async (req) => {
	const product = req.body
	const newProduct = new ProductoModel(product)
	await newProduct.save()
	return product
}

module.exports = addProductService
