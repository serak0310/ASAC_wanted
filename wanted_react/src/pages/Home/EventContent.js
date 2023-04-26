import React from 'react';

const EventContent = ({ imgSrc, tag, title, date }) => {
  return (
    <>
      <li className='eventcontent'>
        <div className="thumbnail">
          <img
            src={imgSrc}
            alt="썸네일"
          />
        </div>
        <div className="inform">
          <div className="tag">{tag}</div>
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
      </li>
    </>
  );
};

export default EventContent;
