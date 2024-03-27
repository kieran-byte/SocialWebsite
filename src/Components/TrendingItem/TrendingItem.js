// TrendingItem.js

import React from 'react';
import './TrendingItem.css';

function TrendingItem({ title, description, color }) {
  return (
    <div className='trending-item' style={{ color: color } }>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export default TrendingItem;
