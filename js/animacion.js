$(document).ready(function() {
  //el botón se hace visible si navegamos hacia abajo
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
	});
});