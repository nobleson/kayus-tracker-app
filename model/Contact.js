
const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    fullname: {
         type: String,
         required: true,
     },
     email: {
        type: String,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

contactSchema.set('toJSON', { virtuals: true })

const Contact = mongoose.model('categories', contactSchema)

module.exports = Contact
