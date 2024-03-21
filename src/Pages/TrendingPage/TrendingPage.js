// TrendingPage.js

import React from 'react';
import './TrendingPage.css';
import TrendingItem from '../../Components/TrendingItem/TrendingItem';
import NZMap from '../../images/nz.jpg'
import InteractiveMap from '../../Components/map/InteractiveMap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'

const TrendingPage = () => {
  return (

    <div>
      <Header/>
<div className="trending-page">
      <div className="small-column">
        <div className="section trending-items">
        <h2>Trending Items</h2>
          <TrendingItem title="Item 1" description="Description of item 1." />
          <TrendingItem title="Item 2" description="Description of item 2." />
          <TrendingItem title="Item 3" description="Description of item 3." />
          <TrendingItem title="Item 4" description="Description of item 4." />
          <TrendingItem title="Item 5" description="Description of item 5." />
          <TrendingItem title="Item 6" description="Description of item 6." />
          <TrendingItem title="Item 7" description="Description of item 7." />
          <TrendingItem title="Item 8" description="Description of item 8." />
          {/* etc */}
        </div>
        <div className="section browse">
          <button> Browse </button>
          
        </div>
        <div className="section add">
          <button>Post An Issue</button>
          {/* Add content goes here */}
        </div>
      </div>
      <div className="large-column">
        <div className="section image">
            <InteractiveMap/>
          {/* <img src={NZMap} className='image' alt="Large Column Image" /> */}
        </div>
      </div>
    </div>
      <Footer/>
    </div>

    
  );
};

export default TrendingPage;
