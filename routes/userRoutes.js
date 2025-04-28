const express = require('express');
const { registerUser, loginUser, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
