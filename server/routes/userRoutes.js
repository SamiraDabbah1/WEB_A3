// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/add-user', userController.getAddUserForm);
// // router.post('/add-user', userController.addUser);
// router.get('/edit-user/:id', userController.getEditUserView);
// router.post('/edit-user/:id', userController.editUser);
// router.get('/delete-user/:id', userController.deleteUser);

// Route for user registration
router.post('/register', userController.addUser);

// Define route to handle login requests
router.post('/login', userController.loginUser);


module.exports = router;
