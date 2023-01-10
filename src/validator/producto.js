const { body, param } = require('express-validator')
const validator = require('../utils/producto')

const addProduct = [
	body('idProducto')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Envíe un valor para el id')
		.isLength({ min: 2 })
		.withMessage('El idProducto tiene que contener mas de 2 caracteres')
		.isNumeric()
		.withMessage('El idProducto tiene que ser numérico'),
	body('producto')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Por favor envíe un valor para el username')
		.isLength({ min: 2 })
		.withMessage('El producto tiene que contener mas de 2 caracteres'),
	body('precio')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Por favor envíe un valor para el precio')
		.isLength({ min: 1 })
		.withMessage('El precio tiene que contener mas de 1 caracter'),
	(req, res, next) => {
		validator(req, res, next)
	},
]

const putProduct = [
	param('idProducto')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Envíe un valor para el id')
		.isLength({ min: 2 })
		.withMessage('El idProducto tiene que contener mas de 2 caracteres')
		.isNumeric()
		.withMessage('El idProducto tiene que ser numérico'),
	body('producto')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Por favor envíe un valor para el username')
		.isLength({ min: 2 })
		.withMessage('El producto tiene que contener mas de 2 caracteres'),
	body('precio')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Por favor envíe un valor para el precio')
		.isLength({ min: 1 })
		.withMessage('El precio tiene que contener mas de 1 caracteres'),
	(req, res, next) => {
		validator(req, res, next)
	},
]

const getDelProduct = [
	param('idProducto')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Envíe un valor para el id')
		.isLength({ min: 2 })
		.withMessage('El idProducto tiene que contener mas de 2 caracteres')
		.isNumeric()
		.withMessage('El idProducto tiene que ser numérico'),
	(req, res, next) => {
		validator(req, res, next)
	},
]

module.exports = { addProduct, putProduct, getDelProduct }
