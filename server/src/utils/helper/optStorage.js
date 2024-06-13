const NodeCache = require('node-cache');

const otpCache = new NodeCache({ stdTTL: 180 });

const saveOTP = (phone, otp) => {
  otpCache.set(phone, otp);
};

const validateOTP = (phone, otp) => {
  const storedOTP = otpCache.get(phone);
  if (storedOTP && storedOTP === otp) {
    otpCache.del(phone);
    return true;
  }
  return false;
};

module.exports = { saveOTP, validateOTP };
