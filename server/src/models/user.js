const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    schemaVersion : {
        type: Number,
        default: 1
    },
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String
    },
    mobileNumber : {
        type: Number,
        required: true,
        unique: true
    },
    emailID : {
        type: String,
        required: true,
        unique: true
    },
    uniqueID : {
        type: String,
        required: true,
        unique: true
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;