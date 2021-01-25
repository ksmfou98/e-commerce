$(document).ready(function(){


    
    $('li[name=cate_gory]').click(function(){                  // li태그에서 name이 cate_gory인걸 클릭했을 때
        var cate_index = $('li[name=cate_gory]').index(this);  // 변수 cate_index에다 , 현재 클릭한 name=category의 인덱스를 저장
        

        for(i=0;i<$('.inner_lnb ul li').length;i++){           // li의 갯수만큼 반복해서 on이라는 클래스를 가지고 있는 애를 찾아서 on 삭제
            if($('.inner_lnb ul li a').hasClass("on") === true){      // 여기서 on은 글자색 보라색으로 해주는 css클래스요소
                $('.inner_lnb ul li a').removeClass('on');            // 기존에 있던 on은 비활성화 시키고 , 이번에 클릭한 요소에다가 on을 활성화 시키기 위함임
            }
        }
        $('.inner_lnb ul li:eq(' + cate_index + ') a').addClass('on');  // 위에서 기존에있던 on을 비활성화 시켰으니 , 방금 클릭한 얘 한테 on을 활성화 해줌

        var change_bg = $('.inner_lnb ul li:eq(' + cate_index + ') a').innerWidth();  //change_bg라는 변수에다가 방금 클릭한 a태그의 가로길이 값을 저장(막대 바 크기 조절을 위해)
        
        
        

        var pos = $('.inner_lnb ul li:eq(' + cate_index + ') a').position();  // 변수 pos에다가 현재 클릭한 a 태그의 위치값 저장
       
        $('.bg_loading').css('display', 'block'); // 로딩창 display block 했다가
        setTimeout(function() {
            $('.bg_loading').css('display', 'none');  //0.5초 뒤에 다시 로딩창 display none 하기
        }, 300);

        
       


        $('.bg').stop().animate({    //bg막대 이동 animate실행
            "left": pos.left+16 + "px",  //left값은 위에서 구한 pos의 left값 만큼 이동
            
        }, 150, function(){  // 150의 속도만큼
            $('.bg').css('width', change_bg+'px');  // 막대길이는 위에서구한 change_bg만큼 변화
        });

    

        


    })

   

   





});