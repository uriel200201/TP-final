const axios = require('axios')
const getClientsService = async () => {
	const clients = await axios.get('https://api.escuelajs.co/api/v1/users')
	return clients.data
}

module.exports = getClientsService
