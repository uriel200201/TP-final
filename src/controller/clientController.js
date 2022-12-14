const getClientsService = require('../services/client/getClientsService')
const getClientByIdService = require('../services/client/getClientByIdService')

const getClientsController = async (req, res) => {
	try {
		const clients = await getClientsService()
		res.json({ message: `get API - Lista de Clientes:`, clients })
	} catch (error) {
		res.json({ message: error.message })
	}
}

const getClientByIdController = async (req, res) => {
	try {
		const client = await getClientByIdService(req)
		res.json({ message: `get API - Cliente:`, client })
	} catch (error) {
		res.json({ message: error.message })
	}
}

module.exports = { getClientsController, getClientByIdController }
