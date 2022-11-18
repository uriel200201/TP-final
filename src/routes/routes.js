const express = require('express')

const router = express.Router()

router.get('/productos')
router.get('/productos/:id')
router.put('/productos/:id')
router.post('/productos/:id')
router.delete('/productos/:id')

module.exports = router
