window.addEventListener('DOMContentLoaded',function(){

    const top_event_close= document.querySelector('.top_event_close');


    
    top_event_close.addEventListener('click', close);

    
    function close(){
       
        $("#top_event").slideUp(200)
    }

    const hover = document.querySelector('.location_notice');
    const btn_hover = document.querySelector('.btn_location');
    hover.onmouseover = function() {
        hover.style.display = 'block';
    }
    hover.onmouseout = function(){
        hover.style.display = 'none';
    }
    btn_hover.onmouseover = function() {
        hover.style.display = 'block';
    }
    btn_hover.onmouseout = function(){
        hover.style.display = 'none';
    }


    



});