import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './FeedbackDashboard.css';
import FeedbackItem from './FeedbackItem';

function FeedbackDashboard() {
  const [feedback, setFeedback] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'timestamp',
    order: 'desc'
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('/feedback/categories');
        setCategories(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        const { category, sortBy, order } = filters;
        const res = await axios.get('/feedback', {
          params: { category, sortBy, order }
        });
        setFeedback(res.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        toast.error('Failed to load feedback');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="dashboard-container">
      <h2>Feedback Dashboard</h2>
      
      <div className="filter-controls">
        <div className="filter-group">
          <label>Category:</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Sort By:</label>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
          >
            <option value="timestamp">Date</option>
            <option value="name">Name</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Order:</label>
          <select
            name="order"
            value={filters.order}
            onChange={handleFilterChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      
      <div className="feedback-list">
        {loading ? (
          <div className="loading">Loading feedback...</div>
        ) : feedback.length === 0 ? (
          <div className="no-feedback">No feedback found</div>
        ) : (
          feedback.map((item) => (
            <FeedbackItem key={item._id} feedback={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default FeedbackDashboard;