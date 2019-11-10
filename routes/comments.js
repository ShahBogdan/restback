const express = require('express');
const router = express.Router();
const commentsController = require('../app/api/controllers/comments');

router.get('/:jobberId', commentsController.getAll);
router.post('/', commentsController.create);

module.exports = router;