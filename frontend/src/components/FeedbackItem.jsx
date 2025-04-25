import React from 'react';
import './FeedbackItem.css';

function FeedbackItem({ feedback }) {
  const { name, email, feedbackText, category, timestamp } = feedback;
  
  const formattedDate = new Date(timestamp).toLocaleString();
  
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="feedback-item">
      <div className="feedback-header">
        <div className="user-info">
          <h3>{name}</h3>
          <p className="email">{email}</p>
        </div>
        <div className="feedback-meta">
          <span className={`category ${category}`}>{formattedCategory}</span>
          <span className="timestamp">{formattedDate}</span>
        </div>
      </div>
      <div className="feedback-content">
        <p>{feedbackText}</p>
      </div>
    </div>
  );
}

export default FeedbackItem;