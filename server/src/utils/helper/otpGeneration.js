const OTP = require('node-otp');

const generateOTP = () => {
  const otp = OTP.generate(6);
  return otp;
};

module.exports = generateOTP;