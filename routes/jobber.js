const express = require('express');
const router = express.Router();
const jobberController = require('../app/api/controllers/jobber');
router.get('/', jobberController.getAll);
router.get('/:jobberInn', jobberController.getByInn);
router.get('/id/:jobberId', jobberController.getById);

router.post('/', jobberController.create);

module.exports = router;