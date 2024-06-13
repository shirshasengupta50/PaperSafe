const express = require('express');

const { apiV1AadhaarRoutes, apiV1PANRoutes, apiV1UserRoutes } = require('./v1/index');

const router = express.Router();

router.use('/v1', apiV1UserRoutes);
router.use('/v1', apiV1AadhaarRoutes);
router.use('/v1', apiV1PANRoutes);

module.exports = router;