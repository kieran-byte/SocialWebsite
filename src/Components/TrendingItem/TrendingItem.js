// TrendingItem.js

import React from 'react';
import './TrendingItem.css';

const TrendingItem = ({ title, description }) => {
  return (
    <div className="trending-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrendingItem;
