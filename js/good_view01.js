window.addEventListener('DOMContentLoaded',function(){ 





    $(document).ready(function() {
        var start_price = $('.goods_price .dc_price').text()
        console.log(start_price);
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

























    });

});