const { mongoose } = require('mongoose')
require('dotenv').config()

const DATABASE = process.env.DATABASE_URL || ''

;(async () => {
	try {
		await mongoose.connect(DATABASE)
		console.log('DB conectada :)')
	} catch (error) {
		console.log('🚀 ~ file: db.js ~ line 11 ~ ; ~ error', error)
	}
})()
