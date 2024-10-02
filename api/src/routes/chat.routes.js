const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chat.controller');

// Retrieve all users
router.get('/', chatController.findAll);

// Create a new chat
router.post('/', chatController.create);

// Retrieve a single chat with id
router.get('/:id', chatController.findById);

// Update a chat with id
router.put('/:id', chatController.update);

// Delete a chat with id
router.delete('/:id', chatController.delete);

module.exports = router