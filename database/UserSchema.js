let mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs'),
    shortid = require('shortid'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
    organization: {
        type:String,
    },
    firstName: {
        type:String,
    },
    lastName: {
        type:String,
    },
    username: {
        type:String,
    },
    email : {
        type: String,
    },
    phoneNumber: {
        type:String,
    },
    address: {
        type:String,
    },
    country: {
        type:String,
    },
    city: {
        type:String,
    },
    zipCode: {
        type:String,
    },
    info: {
        type:String,
    },
    password: {
        type: String,
    },
    stream_key : {
        type: String
    },
    photo : {
        type: String
    },
    facebookChannel : {
        type: String
    },
    twitchChannel : {
        type: String
    },
    youTubeChannel : {
        type: String
    },
    userRole : {
        type: Object
    },
    updateedAt: {
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