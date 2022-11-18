const addProductService = require('../services/product/addProductService')
const getProductsService = require('../services/product/getProductsService')

const getProductsController = async (req, res) => {
	try {
		const products = await getProductsService()
		res.json({ message: `get API - Lista de Productos:`, products })
	} catch (error) {
		console.log(
			'🚀 ~ file: productController.js ~ line 8 ~ getProductController ~ error',
			error
		)
		res.json({ message: error.message })
	}
}

const addProductController = async (req, res) => {
	try {
		const addProduct = await addProductService(req)
		res.status(201).json({
			message: `Producto ${addProduct.producto} creado correctamente`,
		})
	} catch (error) {
		console.log(
			'🚀 ~ file: productController.js ~ line 24 ~ addProductController ~ error',
			error
		)
		res.json({ message: error.message })
	}
}

module.exports = { addProductController, getProductsController }
