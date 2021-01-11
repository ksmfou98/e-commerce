window.addEventListener('DOMContentLoaded',function(){ 





    $(document).ready(function() {

        var noBody = $('.noBody');







        var product_name1 = $(' li:nth-child(1) .name').text();
        var product_name2 = $(' li:nth-child(2) .name').text();

        var product_price1 = $(' li:nth-child(1) .price').text();
        var product_price2 = $(' li:nth-child(2) .price').text();

        var product_cost1 = $('#product_cost1').val();
        var product_cost2 = $('#product_cost2').val();
        console.log(product_cost1); // 확인차

        $('button[name=chk]:eq(0)').click(function(){

            $('#cartPut').css('display','block');
            $('.bg_loading').css('display','block');
            $('#cartPut .name').text(product_name1);
            $('#cartPut .dc_price').text(product_price1);
            $('#cartPut .num').text(product_price1);
            

           
            noBody.addClass('noBody_on');



            var number = $('.inp').val();   //수량
            var cost = product_cost1;   // 상품의 가격을 설정해줘야됨.
            $('.emph').text((number*cost)/20 + '원 적립');


            $('.down').click(function(){
                if(number > 0){
                    number--;
                    $(".inp").val(number);
                    if(number == 0){               // 0원이면 0출력
                        $(".num").text(0);
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

                else{
                    $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                    

                }



                
                $('.emph').text((number*cost)/20 + '원 적립');
                

                
            });

            $('.btn_type2').click(function(){
                $('#cartPut').css('display','none');
                $('.bg_loading').css('display','none');
    
                noBody.removeClass('noBody_on');
                ///// 닫기 눌렀으면 원래값으로 초기화 시켜줘야됨 ////
                number = 1;
                $('.inp').val(1); 
                $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                $('.emph').text((number*cost)/20 + '원 적립');
    
                
            });
                
                
        });

        $('button[name=chk]:eq(1)').click(function(){

            $('#cartPut').css('display','block');
            $('.bg_loading').css('display','block');
            $('#cartPut .name').text(product_name2);
            $('#cartPut .dc_price').text(product_price2);
            $('#cartPut .num').text(product_price2);
            
            

           
            noBody.addClass('noBody_on');

            var number = $('.inp').val();   //수량
            var cost = product_cost2;   // 상품의 가격을 설정해줘야됨.
            $('.emph').text((number*cost)/20 + '원 적립');


            $('.down').click(function(){
                if(number > 0){
                    number--;
                    $(".inp").val(number);
                    if(number == 0){               // 0원이면 0출력
                        $(".num").text(0);
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

                else{
                    $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                    

                }



                
                $('.emph').text((number*cost)/20 + '원 적립');
                

                
            });


            $('.btn_type2').click(function(){
                $('#cartPut').css('display','none');
                $('.bg_loading').css('display','none');
    
                noBody.removeClass('noBody_on');
                ///// 닫기 눌렀으면 원래값으로 초기화 시켜줘야됨 ////
                number = 1;
                $('.inp').val(1); 
                $(".num").text(Math.floor(number*cost/1000) + ',' + number*cost%1000);
                $('.emph').text((number*cost)/20 + '원 적립');
    
                
            });
            
            
        });



        

        

        

        $('.name_select').click(function(){
            $(".checked").toggle(function(){
                $('.name_select').css('color', '#5f0080');
            });
        });



        




        
        






       

























    });





});