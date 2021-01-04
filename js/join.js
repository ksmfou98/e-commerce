window.addEventListener('DOMContentLoaded',function(){



    const id_bell_f = document.querySelector('.id_bell_f');
    const id_bell_s = document.querySelector('.id_bell_s');
    const id_bell_t = document.querySelector('.id_bell_t');
    const inpt_id = document.querySelector('.inpt_id');

    const pw_bell_f = document.querySelector('.pw_bell_f');
    const pw_bell_s = document.querySelector('.pw_bell_s');
    const pw_bell_t = document.querySelector('.pw_bell_t');
    const pw_bell_u = document.querySelector('.pw_bell_u');
    const inpt_pw = document.querySelector('.inpt_pw');

    const pw2_bell_f = document.querySelector('.pw2_bell_f');
    const pw2_bell_s = document.querySelector('.pw2_bell_s');
    const inpt_pw2 = document.querySelector('.inpt_pw2');


    const juso = document.querySelector('#juso');

    function notification1(){
        id_bell_f.classList.add('on');
        id_bell_s.classList.add('on');
        id_bell_t.classList.add('on');
    }

    function notification2(){
        pw_bell_f.classList.add('on');
        pw_bell_s.classList.add('on');
        pw_bell_t.classList.add('on');
        pw_bell_u.classList.add('on');
    }

    function notification3(){
        pw2_bell_f.classList.add('on');
        pw2_bell_s.classList.add('on');
    }

    function jusosearch(){
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                // http://postcode.map.daum.net/guide  api주소 
            }
        }).open();
    }

    inpt_id.addEventListener('click',notification1);

    inpt_pw.addEventListener('click',notification2);

    inpt_pw2.addEventListener('click',notification3);


    juso.addEventListener('click', jusosearch);
    
    


});

