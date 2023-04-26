import React from 'react';

const Banner = ({ imgSrc }) => {
  return (
    <div className="banner">
      <img src={imgSrc} alt="" width="100%" height="300px" />
    </div>
  );
};

export default Banner;