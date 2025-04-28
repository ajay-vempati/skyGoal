const express = require('express');
const { createTask, getUserTasks, updateTask, deleteTask } = require('../controllers/taskcontroller');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createTask);
router.get('/', protect, getUserTasks);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

module.exports = router;
