const mongoose = require('mongoose');

const xiiMarkSheetSchema = new mongoose.Schema({
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

const XIIMarkSheet = mongoose.model('XIIMarkSheet', xiiMarkSheetSchema);

module.exports = XIIMarkSheet;