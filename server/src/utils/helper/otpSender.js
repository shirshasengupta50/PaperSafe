const twilio = require('twilio');

const{ TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = require('../../config/serverConfig');

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const sendOTP = (phone, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}`,
    to: phone,
    from: TWILIO_PHONE_NUMBER
  });
};

module.exports = sendOTP;
