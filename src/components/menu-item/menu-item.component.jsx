import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div 
      className={`MenuItem ${size}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className='content'>
        <h1>{ title }</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;