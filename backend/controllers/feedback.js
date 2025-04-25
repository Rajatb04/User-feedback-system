const Feedback = require('../models/Feedback');

exports.getAllFeedback = async (req, res) => {
  try {
    const { category, sortBy, order } = req.query;
    
    let query = {};
    if (category) {
      query.category = category;
    }
    
    let sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === 'desc' ? -1 : 1;
    } else {
      sortOptions.timestamp = -1;
    }
    
    const feedback = await Feedback.find(query).sort(sortOptions);
    res.status(200).json(feedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const { name, email, feedbackText, category } = req.body;
    
    if (!name || !email || !feedbackText) {
      return res.status(400).json({ message: 'Name, email, and feedback text are required' });
    }
    
    const newFeedback = new Feedback({
      name,
      email,
      feedbackText,
      category: category || 'other'
    });
    
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error('Error creating feedback:', error);
    res.status(500).json({ message: 'Failed to submit feedback' });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Feedback.distinct('category');
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};