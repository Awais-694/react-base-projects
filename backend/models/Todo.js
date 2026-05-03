const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Task must be written first"]
    },

    isDone: {
        type: Boolean,
        default: false
    },


});

module.exports = mongoose.model('Todo', todoSchema);