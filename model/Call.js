const mongoose = require('mongoose')


const callSchema = mongoose.Schema({
	callDate: {
        type:String,
        required: true,
    },
    callType: {
        type:String,
    },
    callDuration: {
        type:String,
    },
    callSuccess: {
        type: String,
    },
    callDrop: {
        type: String,
    },
    phoneBrand: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    phoneContact: {
        type: String,
    },
    mastId: {
        type: String,
    },
    mastAreaCode: {
        type: String,
    },
    longitude: {
        type: String,
    },
    latitude: {
        type: String,
    },
    accuracy: {
        type: String,
    },
    basicPscPci: {
        type: String,
    },
    signalLevel: {
        type: String,
    },
    asuLevel: {
        type: String,
    },
    signalStrength: {
        type: String,
    },
    arfcn: {
        type: String,
    },
    mcc: {
        type: String,
    },
    mnc: {
        type: String,
    },
    signalType: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

callSchema.set('toJSON', { virtuals: true })

const Call = mongoose.model('calls', callSchema)

module.exports = Call
