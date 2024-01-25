const mongoose = require('mongoose');

const codeSnippet = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
        required: true,
        default: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },
    title: {
        type: String,
        required: true
    },
    code: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    suggestedUpdates: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        update: {
            type: String,
            required: true
        },
        accepted: {
            type: Boolean,
            default: false
        }
    }]
});

codeSnippet.methods.canEdit = function(user) {
    return this.createdBy.equals(user._id);
};

codeSnippet.methods.markAsComplete = function() {
    this.completed = true;
};

const CodeSnippet = mongoose.model('CodeSnippet', codeSnippet);

module.exports = CodeSnippet;
