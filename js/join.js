window.addEventListener('DOMContentLoaded',function(){



    const idbell1 = document.querySelector('.idbell1');
    const idbell2 = document.querySelector('.idbell2');
    const idbell3 = document.querySelector('.idbell3');
    const inpt = document.querySelector('.inpt');

    function notification(){
        idbell1.classList.add('on');
        idbell2.classList.add('on');
        idbell3.classList.add('on');
    }

    inpt.addEventListener('click',notification);
    
    


});
