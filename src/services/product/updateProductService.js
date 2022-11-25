const ProductoModel = require('../../models/producto.models')

const updateProductService = async (req) => {
	const { idProducto } = req.params
	const producto = req.body
	const productToUpdate = await ProductoModel.findOne({ idProducto })

	productToUpdate.producto = producto.producto
	productToUpdate.precio = producto.precio

	await productToUpdate.save()

	return productToUpdate.producto
}

module.exports = updateProductService
