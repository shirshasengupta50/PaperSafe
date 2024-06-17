const express = require('express');

const { apiV1AadhaarRoutes, apiV1PANRoutes, apiV1UserRoutes, apiV1XMarkSheetRoutes, apiV1XIIMarkSheetRoutes, apiV1MovieTicketRoutes } = require('./v1/index');

const router = express.Router();

router.use('/v1', apiV1UserRoutes);
router.use('/v1', apiV1AadhaarRoutes);
router.use('/v1', apiV1PANRoutes);
router.use('/v1', apiV1XMarkSheetRoutes);
router.use('/v1', apiV1XIIMarkSheetRoutes);
router.use('/v1', apiV1MovieTicketRoutes);

module.exports = router;