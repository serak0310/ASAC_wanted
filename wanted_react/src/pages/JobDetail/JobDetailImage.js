import React from 'react';

const JobDetailImage = ({ imgSrc }) => {
  return(
    <div className='jobdetail_slide_item'>
      <img src={imgSrc} alt="" className="jobdetail_slide_img" />
    </div>
  );
};

export default JobDetailImage;