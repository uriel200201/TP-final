const ProductoModel = require('../../models/producto.models')

const deleteProductService = async (req) => {
	const { idProducto } = req.params
	const res = await ProductoModel.deleteOne({ idProducto })
	if (res.deletedCount == 0)
		throw new Error(
			`No se encontró ningún producto con el id: ${idProducto}`,
			{ cause: 404 }
		)
	return idProducto
}

module.exports = deleteProductService
