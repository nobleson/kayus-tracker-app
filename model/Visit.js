const mongoose = require('mongoose')

const visitSchema = mongoose.Schema({
	counter: {
        type:Number,
        required: true,
    },
    device: {
        type:String,
    },
    country: {
        type:String,
    },
    updatedAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

visitSchema.set('toJSON', { virtuals: true })

const Visit = mongoose.model('visits', visitSchema)

module.exports = Visit