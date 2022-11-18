const app = require('./server/server')
require('./database/db')
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(`Server corriendo en http://localhost:${PORT}`)
)
