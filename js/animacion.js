//el botón se hace visible si navegamos hacia abajo
$(document).ready(function(){
  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
             $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });  
});