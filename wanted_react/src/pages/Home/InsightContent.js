import React from 'react';

const InsightContent = ({ imgSrc, title, content, logoSrc, author }) => {
  return (
    <>
      <li id="carrerContentList_content">
        <div>
          <img className="thumbnail" src={imgSrc} alt="썸네일" />
        </div>
        <div className="text">
          <p className="title">{title}</p>
          <p className="content">{content}</p>
        </div>
        <div className="markauthor">
          <div>
            <img
              className="mark"
              src={logoSrc}
              alt="마크"
            />
          </div>
          <span className='author'>{author}</span>
        </div>
      </li>
    </>
  );
};

export default InsightContent;
