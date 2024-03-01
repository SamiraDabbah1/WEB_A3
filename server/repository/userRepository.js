const userModel = require('../models/userModel');
function getAll(callback) {
    userModel.find({}, (err, users) => {
        if (err) {
            console.error('Error fetching users:', err);
            callback([]);
        } else {
            callback(users);
        }
    });
}

function getById(id, callback) {
    userModel.findById(id, (err, user) => {
        if (err) {
            console.error('Error fetching user by ID:', err);
            callback(null);
        } else {
            callback(user);
        }
    });
}

function add(user, callback) {
    const newUser = new userModel(user);
    newUser.save((err, savedUser) => {
        if (err) {
            console.error('Error adding user:', err);
            callback(null);
        } else {
            callback(savedUser);
        }
    });
}

function update(user, callback) {
    userModel.findByIdAndUpdate(user._id, user, { new: true }, (err, updatedUser) => {
        if (err) {
            console.error('Error updating user:', err);
            callback(null);
        } else {
            callback(updatedUser);
        }
    });
}

function remove(id, callback) {
    userModel.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) {
            console.error('Error deleting user:', err);
            callback(null);
        } else {
            callback(deletedUser);
        }
    });
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove
};
