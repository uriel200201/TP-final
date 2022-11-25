const ProductoModel = require('../../models/producto.models')
const getProductsByIdService = async (req) => {
	const { idProducto } = req.params
	const productos = await ProductoModel.findOne({ idProducto })
	if (productos === null)
		throw new Error(
			`No se ha encontrado un producto con el id: ${idProducto}`,
			{ cause: 404 }
		)
	return productos
}

module.exports = getProductsByIdService
