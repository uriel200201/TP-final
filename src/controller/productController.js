const addProductService = require('../services/product/addProductService')
const getProductsService = require('../services/product/getProductsService')
const getProductsByIdService = require('../services/product/getProductsByIdService')
const updateProductService = require('../services/product/updateProductService')
const deleteProductService = require('../services/product/deleteProductService')

const getProductsController = async (req, res) => {
	try {
		const products = await getProductsService()
		res.json({ message: `get API - Lista de Productos:`, products })
	} catch (error) {
		res.status(error.cause).json({ message: error.message })
	}
}

const getProductsByIdController = async (req, res) => {
	try {
		const product = await getProductsByIdService(req)
		res.json({ message: `get API - Producto por Id:`, product })
	} catch (error) {
		res.status(error.cause).json({ message: error.message })
	}
}

const addProductController = async (req, res) => {
	try {
		const addProduct = await addProductService(req)
		res.status(201).json({
			message: `Producto ${addProduct.producto} creado correctamente`,
		})
	} catch (error) {
		res.json({ message: error.message })
	}
}

const updateProductController = async (req, res) => {
	try {
		const updateProduct = await updateProductService(req)
		res.status(200).json({
			message: `Modificado el roducto: ${updateProduct}, con id: ${req.params.idProducto}`,
		})
	} catch (error) {
		res.json({ message: error.message })
	}
}

const deleteProductController = async (req, res) => {
	try {
		const delProduct = await deleteProductService(req)
		res.status(200).json({
			message: `Producto con id: ${delProduct}, eliminado exitosamente`,
		})
	} catch (error) {
		res.status(error.cause).json({ message: error.message })
	}
}

module.exports = {
	addProductController,
	getProductsController,
	getProductsByIdController,
	updateProductController,
	deleteProductController,
}
