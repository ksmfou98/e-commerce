window.addEventListener('DOMContentLoaded',function(){



    const id_bell_f = document.querySelector('.id_bell_f');
    const id_bell_s = document.querySelector('.id_bell_s');
    const id_bell_t = document.querySelector('.id_bell_t');
    

    const pw_bell_f = document.querySelector('.pw_bell_f');
    const pw_bell_s = document.querySelector('.pw_bell_s');
    const pw_bell_t = document.querySelector('.pw_bell_t');
    const pw_bell_u = document.querySelector('.pw_bell_u');
    

    const pw2_bell_f = document.querySelector('.pw2_bell_f');
    const pw2_bell_s = document.querySelector('.pw2_bell_s');


    const juso = document.querySelector('#juso');
    const user_address = document.querySelector('#user_address');
    const user_detail_address = document.querySelector('#user_detail_address');
    const juso_search = document.querySelector('.juso_search');


    juso.addEventListener('click', jusosearch);

    function jusosearch(){
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    
                
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
               
                document.getElementById("user_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("user_detail_address").focus();

                user_address.classList.add('on');
                juso_search.classList.add('on');
                user_detail_address.classList.add('on');
                juso.classList.add('on');






                







                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                // http://postcode.map.daum.net/guide  api주소 
            }
        }).open();
    }





    // 비밀번호 일치 불일치

    $('.check_pw').focusout(function () {
        var pwd1 = $(".inpt_pw").val();
        var pwd2 = $(".inpt_pw2").val();
 
        if ( pwd1 != '' && pwd2 == '' ) {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 == pwd2) {
                $(".pw2_bell_s").css('color', '#0f851a');
                $(".pw2_bell_s").text("비밀번호가 동일합니다.");
            
                
            } else {
                $(".pw2_bell_s").css('color', '#b3130b');
                $(".pw2_bell_s").text("비밀번호가 일치하지 않습니다..");
                
                
            }
        }
    });


    //아이디 조건 만족 불만족

    var text1 = $('.inpt_id');
    text1.focus(function(){
        id_bell_f.classList.add('on');
        id_bell_s.classList.add('on');
        id_bell_t.classList.add('on');
      });
      text1.blur(function(){
        
      });




    //비밀번호 조건 만족 불만족
    var text2 = $('.inpt_pw');
    text2.focus(function(){
        pw_bell_f.classList.add('on');
        pw_bell_s.classList.add('on');
        pw_bell_t.classList.add('on');
        pw_bell_u.classList.add('on');
      });
      text2.blur(function(){
        
      });

    //비밀번호 확인 조건 만족 불만족
    var text3 = $('.inpt_pw2');
    text3.focus(function(){
        pw2_bell_f.classList.add('on');
        pw2_bell_s.classList.add('on');
      });
      text3.blur(function(){
        
      });
    


});

