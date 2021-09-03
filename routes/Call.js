const express = require('express')
const router = express.Router()
const call = require('../controller/Call')

// routes
router.get('/', call.getAll)
router.get('/:id', call.getById)
router.post('/create', call.register)
router.put('/:id', call.update)
router.delete('/:id', call._delete)

module.exports = router
