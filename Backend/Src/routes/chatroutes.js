const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Chat route
router.post('/', chatController.handleChat);

module.exports = router;
