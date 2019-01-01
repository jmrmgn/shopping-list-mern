const express = require('express');
const router = express.Router();

// Controller
const itemController = require('../../controllers/itemController');

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/', itemController.getItems);

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post('/', itemController.postItem);

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Public
router.delete('/:id', itemController.deleteItem);

module.exports = router;