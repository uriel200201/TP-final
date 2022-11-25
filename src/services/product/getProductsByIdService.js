const ProductoModel = require('../../models/producto.model')
const getProductsByIdService = async (req) => {
	const { id } = req.params
	const products = await ProductoModel.findOne({ id })
	return products
}

module.exports = getProductsByIdService
