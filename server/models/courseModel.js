const mongoose = require('mongoose');

// Define the course schema
const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCategory: {
        type: String,
        required: true
    },
    
    courseDuration: {
        type: String,
        required: true
    },
    courseLanguage: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseLessons: {
        type: Number,
        required: true
    },
    courseCoverPhoto: {
        type: String,
        required: true
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

// Create and export the Course model
module.exports = mongoose.model('Course', courseSchema);
