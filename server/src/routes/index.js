const express = require('express');

const { apiV1AadhaarRoutes, apiV1PANRoutes, apiV1UserRoutes, apiV1XMarkSheetRoutes } = require('./v1/index');

const router = express.Router();

router.use('/v1', apiV1UserRoutes);
router.use('/v1', apiV1AadhaarRoutes);
router.use('/v1', apiV1PANRoutes);
router.use('/v1', apiV1XMarkSheetRoutes);

module.exports = router;