const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);