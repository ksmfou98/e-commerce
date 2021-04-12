import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="section_login">
      <h3 className="tit_login">로그인</h3>
      <div className="write_form">
        <div className="write_view login_view">
          <form method="post" name="login_form" id="form" action="">
            <input
              type="text"
              name="m_id"
              
              
              placeholder="아이디 입력"
            />
            <input
              type="password"
              name="password"
              
              
              placeholder="비밀번호 입력"
            />
            <div className="checkbox_save">
              <div className="login_search">
                <a href="find_id.html" className="link">
                  아이디 찾기
                </a>
                <span className="bar"></span>
                <a href="find_pw.html" className="link">
                  비밀번호 찾기
                </a>
              </div>
            </div>
            <button type="button"  className="btn_type1">
              <span className="txt_type">로그인</span>
            </button>
          </form>
          <div className="btn_type2 btn_member">
              <Link to="/join">
                  <span className="txt_type">회원가입</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
