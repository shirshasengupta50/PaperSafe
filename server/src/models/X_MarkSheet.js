const mongoose = require('mongoose');

const xMarkSheetSchema = new mongoose.Schema({
    schemaVersion : {
        type: Number,
        default: 1
    },
    imageURL: {
        type: String,
        required: true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const XMarkSheet = mongoose.model('XMarkSheet', xMarkSheetSchema);

module.exports = XMarkSheet;