const express = require('express')
const router = express.Router()
const contact = require('../controller/Contact')

// routes
router.get('/', contact.getAll)
router.get('/:id', contact.getById)
router.post('/create', contact.register)
router.delete('/:id', contact._delete)

module.exports = router
