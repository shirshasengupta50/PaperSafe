const { saveOTP, validateOTP } = require('./optStorage');

module.exports = {
    uniqueIDGenerator: require("./uniqueIDGenerator"),
    encryptImage: require("./imageEncryption"),
    decryptImage: require("./imageDecryption"),
    generateOTP: require('./otpGeneration'),
    saveOTP,
    validateOTP,
    sendOTP: require('./otpSender')
}