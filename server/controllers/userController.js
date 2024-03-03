const userRepository = require('../repository/userRepository');
const User = require('../models/userModel');
// Import necessary modules and dependencies
const bcrypt = require('bcrypt'); // For password hashing

exports.addUser = async (req, res) => {
    try {
        const { userName, userType, userEmail, userPassword } = req.body;

        console.log('Received user data:', req.body);


        // Create a new user object with hashed password
        const newUser = new User({
            userName,
            userType,
            userEmail,
            userPassword // Store hashed password in the database
        });
        console.log('New user object:', newUser);

        // Save the new user to the database
        await newUser.save();

        console.log('User saved successfully');

        // If the request is an API request, return a success message
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(201).json({ message: 'User registered successfully', user: newUser });
        } else {
            // If it's a form submission, redirect the user to the login page
            return res.redirect('/login.html');
        }
    } catch (error) {
        console.error('Error adding user:', error);
        // If an error occurs, return a 500 status code with an error message
        return res.status(500).json({ message: 'Error adding user' });
    }
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ userEmail: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Now we have the user and can access their userType
        const userType = user.userType;
        const userName = user.userName;

        // Compare plain text passwords directly (not recommended)
        if (password !== user.userPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Redirect based on userType
        let redirectUrl = userType === 'student' ? '/StudentHome.html' : '/LecturerHome.html';
        res.redirect(`${redirectUrl}?userName=${encodeURIComponent(userName)}`);
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



exports.getAddUserForm = (req, res) => {
    res.render('add-user');
};


exports.editUser = (req, res) => {
    const { userName, userType, userEmail, userPassword } = req.body;
    const userId = req.params.id;
    userRepository.update({ _id: userId, userName, userType, userEmail, userPassword }, (updatedUser) => {
        if (updatedUser) {
            res.redirect('/users');
        } else {
            res.status(500).send('Error updating user');
        }
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    userRepository.remove(userId, (deletedUser) => {
        if (deletedUser) {
            res.redirect('/users');
        } else {
            res.status(500).send('Error deleting user');
        }
    });
};