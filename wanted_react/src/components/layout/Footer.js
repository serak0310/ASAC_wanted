import React from 'react';
import '../../styles/style.css';
import { ReactComponent as Logo_img } from '../../assets/svg/logo_img.svg';
import { ReactComponent as Logo_txt } from '../../assets/svg/logo_txt.svg';

function Footer() {
    return (
        <footer>
        <div className="top_footer">
            <div className="footer_nav_container">
                <div className="footer_logo">
                    <span><Logo_img/></span>
                    <span><Logo_txt/></span>
                </div>
                <ul className="footer_nav">
                    <li><a href="">기업소개</a></li>
                    <li><a href=""></a>이용약관</li>
                    <li><a href=""></a>고객센터</li>
                    <li><a href=""></a>개인정보 처리방침</li>
                </ul>
            </div>
            <ul className="snslink">
                <li className="instagram"><a href=""><img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
                            alt="인스타"/></a></li>
                <li className="youtube"><a href=""><img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
                            alt="유튜브"/></a></li>
                <li className="facebook"><a href=""><img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
                            alt="페이스북"/></a></li>
                <li className="naver"><a href=""><img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
                            alt="네이버블로그"/></a></li>
                <li className="apple"><a href=""><img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
                            alt="앱스토어"/></a></li>
                <li className="google"><a href=""><img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
                            alt="플레이스토어"/></a></li>
            </ul>
        </div>
        <div className="bottom_footer">
            <p>
                (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                <br />
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
                02-539-7118
                <br />
                © Wantedlab, Inc.
            </p>
        </div>
    </footer>
    );
}

export default Footer;