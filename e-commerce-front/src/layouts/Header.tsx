import React from "react";
import "./Header.css";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="Header">
      <div id="header-nav">
        <ul>
          <li>
            <Link to="#">고객센터</Link>
          </li>
          <li>
            <Link to="#">장바구니</Link>
          </li>
          <li>
            <Link to="/join">회원가입</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </div>
      <div id="header-usermenu">
        <h1>
            <Link to="/">도신사</Link>
        </h1>
        <ul>
          <li>
            <Link to="#">의류</Link>
          </li>
          <li>
            <Link to="#">전자기기</Link>
          </li>
          <li>
            <Link to="#">가정용품</Link>
          </li>
          <li>
            <Link to="#">화장품</Link>
          </li>
          <li>
            <Link to="#">기타</Link>
          </li>
        </ul>
        <div className="header-search">
          <form action="">
            <input
              type="text"
              className="search-input"
              placeholder="가성비 최강 도신사"
            />
            <div className="search-submit">
              <CgSearch size="20" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
