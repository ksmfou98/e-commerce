window.addEventListener('DOMContentLoaded',function(){ 





    $(document).ready(function() {
        var start_price = $('.goods_price .dc_price').text()
        
        var number = $('.inp').val();   //수량
        var cost = $('.goods_price input').val(); ;  // 상품의 가격을 설정해줘야됨.
        $('.emph').text((number*cost)/20 + '원 적립');
        $('.price .num').text(start_price);
        $('.emphh').text((number*cost)/20 + '원 적립');
    
    
        $('.down').click(function(){
            if(number > 0){
                number--;
                $(".inp").val(number);
                if(number == 0){               // 0원이면 0출력
                    $(".num").text(0);
                }

                else if(number*cost < 1000){
                    $(".num").text(number*cost);
                }


                else if((number*cost % 1000) == 0){
                    
                    $(".num").text(Math.floor(number*cost/1000) + ',' + '000');
                }
                else{
                
                $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                }
            }
    
            if(number < 0){             //0 이하면 false 반환
                return false;
            }
    
    
            $('.emph').text((number*cost)/20 + '원 적립');
            
        
            
            
        });
    
    
    
        $('.up').click(function(){
            number++;
            $(".inp").val(number);
            if((number*cost % 1000) == 0){
                $(".num").text(Math.floor(number*cost/1000) + ',' + '000');
            }

            else if(number*cost < 1000){
                $(".num").text(number*cost);
            }
    
            else{
                $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                
    
            }
    
    
    
            
            $('.emph').text((number*cost)/20 + '원 적립');
            
    
            
        });


        var imgs;
        var img_count;
        var img_position = 1;
        imgs = $('.__slide-wrapper ul');
        img_count = imgs.children().length;  //slide ul의 자식, 즉 li의 갯수 = 이미지의 갯수




        $('.__slide-go-left').click(function(){
            slide_left();
        });

        $('.__slide-go-right').click(function(){
            slide_right();
        });

        function slide_left() {
            if(img_count > 0){
                $('.__slide-wrapper ul li').last().prependTo('.__slide-wrapper ul');
                $('.__slide-wrapper ul').css("left",(-180)+"px");
                $('.__slide-wrapper ul').stop().animate({
                    "left":"0px"
                }, 500, function(){
    
                });
            }
            return false;
        }

        function slide_right() {
            if(img_count > 0){
                $('.__slide-wrapper ul').stop().animate({
                    "left": (-180) + "px"
                }, 500, function(){
                    $('.__slide-wrapper ul li').first().appendTo('.__slide-wrapper ul');
                    $('.__slide-wrapper ul').css("left","0px");
                })
            }
            return false;
        }



       

















    });

});