const ProductoModel = require('../../models/producto.models')
const getProductsService = async () => {
	const products = await ProductoModel.find()
	if (products.length < 1)
		throw new Error('No hay productos en la base de datos', { cause: 404 })
	return products
}

module.exports = getProductsService
