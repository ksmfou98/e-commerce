window.addEventListener('DOMContentLoaded',function(){ 





    $(document).ready(function() {

        var noBody = $('.noBody');









        $('.btn').click(function(){

            $('#cartPut').css('display','block');
            $('.bg_loading').css('display','block');


           
            noBody.addClass('noBody_on');
            
            
        });



        $('.txt_type').click(function(){
            $('#cartPut').css('display','none');
            $('.bg_loading').css('display','none');

            noBody.removeClass('noBody_on');
            
        });

        var number = $('.inp').val();
        var cost = 1300;   // 상품의 가격을 설정해줘야됨.

        $('.down').click(function(){
            if(number > 0){
                number--;
                $(".inp").val(number);
                if(number == 0){
                    $(".num").text(0);
                }
                else if((number % 10) == 0){
                    
                    $(".num").text(Math.floor(number*cost/1000) + ',' + '000');
                }
                else{
                
                $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                }
            }

            if(number < 0){
                return false;
            }
            
            
            
        });



        $('.up').click(function(){
            number++;
            $(".inp").val(number);
            if((number % 10) == 0){
                $(".num").text(Math.floor(number*cost/1000) + ',' + '000');
            }

            else{
                $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                

            }



            
           
            

            
        });



        




        
        






       

























    });





});