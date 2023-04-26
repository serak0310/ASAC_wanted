import React from 'react';
import { ReactComponent as X_ic } from '../../assets/svg/ic_x.svg';

const AsideBanner = ({ imgSrc }) => {
    return (
        <div className='aside_banner'>
        <button className='aside_banner_x_btn'><X_ic/></button>
        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=144&q=90'
        alt="크리에이터 추천하기" width={62} height={43}></img>
        <div className='aside_banner_txt'>즐겨보는<div>크리에이터의</div> 글도 추천하고 싶다면?</div>
        <hr></hr>
        <a href='' className='aside_banner_recommend_btn'><span>크리에이터 추천하기 {'>'}</span></a>
      </div>
    );
  };
  
  export default AsideBanner;