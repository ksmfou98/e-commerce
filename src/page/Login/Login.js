import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="section_login">
      <h3 class="tit_login">로그인</h3>
      <div class="write_form">
        <div class="write_view login_view">
          <form method="post" name="login_form" id="form" action="">
            <input
              type="text"
              name="m_id"
              size="20"
              tabindex="1"
              placeholder="아이디 입력"
            />
            <input
              type="password"
              name="password"
              size="20"
              tabindex="2"
              placeholder="비밀번호 입력"
            />
            <div class="checkbox_save">
              <div class="login_search">
                <a href="find_id.html" class="link">
                  아이디 찾기
                </a>
                <span class="bar"></span>
                <a href="find_pw.html" class="link">
                  비밀번호 찾기
                </a>
              </div>
            </div>
            <button type="button" onclick="check_input()" class="btn_type1">
              <span class="txt_type">로그인</span>
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
