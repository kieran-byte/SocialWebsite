// TrendingItem.js

import React from 'react';

const TrendingItem = ({ title, description }) => {
  return (
    <div className="trending-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrendingItem;
