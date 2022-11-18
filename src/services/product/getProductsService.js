const ProductoModel = require('../../models/producto.model')
const getProductsService = async () => {
	const products = await ProductoModel.find()
	return products
}

module.exports = getProductsService
