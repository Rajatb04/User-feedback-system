import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './FeedbackForm.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackText: '',
    category: 'other'
  });
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, feedbackText, category } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !feedbackText) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await axios.post('/feedback', formData);
      toast.success('Feedback submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        feedbackText: '',
        category: 'other'
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Failed to submit feedback. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="suggestion">Suggestion</option>
            <option value="bug report">Bug Report</option>
            <option value="feature request">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="feedbackText" className="form-label">Feedback *</label>
          <textarea
            id="feedbackText"
            name="feedbackText"
            value={feedbackText}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your feedback"
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn submit-btn" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;