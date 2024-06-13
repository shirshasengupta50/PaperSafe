const express = require('express');

const { userController } = require('../../controllers/index');

const router = express.Router();

router.post('/register', userController.userRegistration);

module.exports = router;