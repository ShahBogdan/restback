const express = require('express');
const router = express.Router();
const jobberController = require('../app/api/controllers/jobber');
router.post('/', jobberController.create);
module.exports = router;