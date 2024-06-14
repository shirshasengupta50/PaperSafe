const express = require('express');

const { userController } = require('../../controllers/index');

const router = express.Router();

router.post('/register', userController.userRegistration);
router.post('/requestOTP', userController.otpRequest);
router.post('/verifyOTP', userController.otpVerification);
router.post('updateUser', userController.updateUserInfo);
router.post('deleteUser', userController.deleteUser);

module.exports = router;