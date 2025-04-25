const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  feedbackText: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['suggestion', 'bug report', 'feature request', 'other'],
    default: 'other'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);