const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile/:userId', authenticateToken, userController.getProfile);
router.get('/orders/:userId', authenticateToken, userController.getOrders);

module.exports = router;