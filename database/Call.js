let mongoose = require('mongoose');
    Schema = mongoose.Schema;

let CallSchema = new Schema({
    phoneNumber: {
        type:String,
    },
    contactName: {
        type:String,
    },
    callType: {
        type:String,
    },
    callDate: {
        type:String,
    },
    callDuration : {
        type: String,
    },
    callSetup : {
        type: String,
    },
    mastID: {
        type:String,
    },
    mastAreaCode: {
        type:String,
    },
    longitude: {
        type:String,
    },
    latitude: {
        type:String,
    },
    mastSpeedAccuracy: {
        type:String,
    },
    basicPscPci: {
        type:String,
    },
    singnalLevel: {
        type: String,
    },
    signalLevelAsu : {
        type: String
    },
    signalStrengthDBM : {
        type: String
    },
    arfChannel : {
        type: String
    },
    mobileCountryCode : {
        type: String
    },
    mobileNetworkCode : {
        type: String
    },
    signalType : {
        type: String
    },
    phoneBrand : {
        type: String
    },
    createddAt: {
        type: Date,
     },
});

UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateStreamKey = () => {
    return shortid.generate();
};


module.exports = UserSchema;