const express = require('express')
const router = express.Router()
const visit = require('../controller/Visit')

// routes
router.get('/:id', visit.getById)
router.post('/create', visit.register)
router.put('/:id', visit.update)
router.delete('/:id', visit._delete)

module.exports = router
