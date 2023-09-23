const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        default: 'image/b7.jpg',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 320,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema);