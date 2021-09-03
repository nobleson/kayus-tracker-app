const express = require('express')
const router = express.Router()
const user = require('../controller/User')

// routes
router.get('/', user.getAll)
router.get('/:id', user.getById)
router.get('/stream_key/:id', user.getByStreamingKey)
router.put('/current', user.update)
router.delete('/:id', user._delete)

module.exports = router
