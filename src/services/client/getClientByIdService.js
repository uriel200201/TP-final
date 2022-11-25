const axios = require('axios')
const getClientByIdService = async (req) => {
	const { id } = req.params
	const res = await axios.get('https://api.escuelajs.co/api/v1/users')
	const clients = res.data
	const client = clients.find((client) => client.id === Number(id))
	return client
}

module.exports = getClientByIdService
