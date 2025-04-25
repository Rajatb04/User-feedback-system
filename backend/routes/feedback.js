const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback');

router.get('/', feedbackController.getAllFeedback);

router.post('/', feedbackController.createFeedback);

router.get('/categories', feedbackController.getCategories);

module.exports = router;