const ProductoModel = require('../../models/producto.models')
const getProductsService = async () => {
	const products = await ProductoModel.find()
	return products
}

module.exports = getProductsService
