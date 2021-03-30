import React from "react";
import "page/Join/Join.css";

const Join = () => {
  return (
    <div className="type_form member_join">
      <form id="form" action="" method="POST">
        <div className="field_head">
          <h3 className="tit">회원가입</h3>
          <p className="sub">
            <span className="ico">*</span>
            필수입력사항
          </p>
        </div>

        <table className="tbl_comm">
          <tbody>
            <tr className="fst field_id">
              <th>
                아이디
                <span className="ico">*</span>
              </th>
              <td>
                <input
                  type="text"
                  placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                  required
                />
                <button type="button" className="btn default">
                  중복확인
                </button>
                <p className="txt_guide square">
                  <span className="txt txt_case1">
                    6자 이상의 영문 혹은 영문과 숫자를 조합
                  </span>
                  <span className="txt txt_case2">아이디 중복확인</span>
                </p>
              </td>
            </tr>

            <tr className="field_pw">
              <th>
                비밀번호
                <span className="ico">*</span>
              </th>
              <td>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  className="reg_pw bad"
                  required
                />
                <p className="txt_guide square">
                  <span className="txt txt_case1">10자 이상 입력</span>
                  <span className="txt txt_case2">
                    영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                  </span>
                </p>
              </td>
            </tr>

            <tr className="member_pwd field_repw">
              <th>
                비밀번호확인
                <span className="ico">*</span>
              </th>
              <td>
                <input
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  className="confirm_pw"
                  required
                />
                <p className="txt_guide square">
                  <span className="txt txt_case1">
                    동일한 비밀번호를 입력해주세요.
                  </span>
                </p>
              </td>
            </tr>

            <tr className="field_name">
              <th>
                이름
                <span className="ico">*</span>
              </th>
              <td>
                <input type="text" placeholder="이름을 입력해주세요" required />
              </td>
            </tr>

            <tr className="field_email">
              <th>
                이메일
                <span className="ico">*</span>
              </th>
              <td>
                <input
                  type="text"
                  placeholder="예: ksmfou98@naver.com"
                  required
                />
                <button className="btn default">중복확인</button>
              </td>
            </tr>

            <tr>
              <th>
                주소
                <span className="ico">*</span>
              </th>
              <td className="field_address">
                <button type="button" id="addressSearch" className="search">
                  <span id="addressNo" className="address_no">
                    주소검색
                  </span>
                </button>
                <input
                  id="user_address"
                  type="text"
                  placeholder="주소"
                  required
                />
                <input
                  id="user_detail_address"
                  type="text"
                  placeholder="상세주소"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div id="formSubmit" className="form_footer">
          <button type="submit" className="btn active btn_join">
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
