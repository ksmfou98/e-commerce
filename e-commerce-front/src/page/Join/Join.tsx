import React, { useState } from 'react';
import 'page/Join/Join.css';

const Join = () => {
  const [checks, setChecks] = useState({
    userID: 0,
    userPW: 0,
    userPWCHECK: 0,
    idCheck: 0,
    pwCheck: 0,
    repwCheck: 0,
    idInput: '',
    pwInput: '',
    pwCheckInput: '',
  });

  const { userID, userPW, userPWCHECK, idCheck, pwCheck, repwCheck, idInput, pwInput, pwCheckInput } = checks;

  // 아이디, 비밀번호, 비밀번호확인 포커스 관리
  const onFocus = (e: any) => {
    setChecks({
      ...checks,
      [e.target.name]: 1,
    });
  };

  let num = /[0-9]/;
  let eng = /[a-zA-Z]/;
  let spe = /[~!@#$%^&*()_+|<>?:{}]/;

  // 아이디 유효성 검사
  const idChange = (e: any) => {
    console.log(idInput);
    if (e.target.value.length >= 6 && eng.test(e.target.value) === true) {
      setChecks({
        ...checks,
        idCheck: 1,
        idInput: e.target.value,
      });
    } else {
      setChecks({
        ...checks,
        idCheck: 0,
        idInput: e.target.value,
      });
    }
  };

  // 비밀번호 유효성 검사
  const pwChange = (e: any) => {
    console.log(pwInput);
    if (
      e.target.value.length >= 10 &&
      num.test(e.target.value) === true &&
      eng.test(e.target.value) === true &&
      spe.test(e.target.value) === true
    ) {
      setChecks({
        ...checks,
        pwCheck: 1,
        pwInput: e.target.value,
      });
    } else {
      setChecks({
        ...checks,
        pwCheck: 0,
        pwInput: e.target.value,
      });
    }
  };

  // 비밀번호 확인 유효성 검사
  const repwChange = (e: any) => {
    if (e.target.value === pwInput) {
      setChecks({
        ...checks,
        repwCheck: 1,
        pwCheckInput: e.target.value,
      });
    } else {
      setChecks({
        ...checks,
        repwCheck: 0,
        pwCheckInput: e.target.value,
      });
    }
  };

  return (
    <div className="type_form member_join">
      <form id="form" action="" method="POST">
        <div className="field_head">
          <h3 className="tit">회원가입</h3>
        </div>

        <table className="tbl_comm">
          <tbody>
            <tr className="fst field_id">
              <th>아이디</th>
              <td>
                <input
                  name="userID"
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  required
                  onFocus={onFocus}
                  onChange={idChange}
                />
                <button type="button" className="btn default">
                  중복확인
                </button>
                <p className={`txt_guide square ${userID ? 'show' : ''}`}>
                  <span className={`txt ${idCheck ? 'good' : 'bad'}`}>6자 이상의 영문 혹은 영문과 숫자를 조합</span>
                  <span className="txt">아이디 중복확인</span>
                </p>
              </td>
            </tr>

            <tr className="field_pw">
              <th>비밀번호</th>
              <td>
                <input
                  name="userPW"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  className="reg_pw"
                  required
                  onFocus={onFocus}
                  onChange={pwChange}
                />
                <p className={`txt_guide square ${userPW ? 'show' : ''}`}>
                  <span className={`txt ${pwCheck ? 'good' : 'bad'}`}>
                    10자 이상의 영문/숫자/특수문자(공백 제외)를 조합
                  </span>
                </p>
              </td>
            </tr>

            <tr className="member_pwd field_repw">
              <th>비밀번호확인</th>
              <td>
                <input
                  name="userPWCHECK"
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  className="confirm_pw"
                  required
                  onFocus={onFocus}
                  onChange={repwChange}
                />
                <p className={`txt_guide square ${userPWCHECK ? 'show' : ''}`}>
                  <span className={`txt ${repwCheck ? 'good' : 'bad'}`}>동일한 비밀번호를 입력해주세요.</span>
                </p>
              </td>
            </tr>

            <tr className="field_name">
              <th>이름</th>
              <td>
                <input type="text" placeholder="이름을 입력해주세요" required />
              </td>
            </tr>

            <tr className="field_email">
              <th>이메일</th>
              <td>
                <input type="text" placeholder="예: ksmfou98@naver.com" required />
                <button className="btn default">중복확인</button>
              </td>
            </tr>

            <tr>
              <th>주소</th>
              <td className="field_address">
                <button type="button" id="addressSearch" className="search">
                  <span id="addressNo" className="address_no">
                    주소검색
                  </span>
                </button>
                <input id="user_address" type="text" placeholder="주소" required />
                <input id="user_detail_address" type="text" placeholder="상세주소" required />
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

      <div className="link_login">
        <span>
          이미 쇼핑몰 회원 이신가요 ??
          <a href="#"> 로그인</a>
        </span>
      </div>
    </div>
  );
};

export default Join;
