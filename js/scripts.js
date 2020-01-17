$(document).ready(function(){

    $(window).scroll(function() {
        onResize();
        window.addEventListener('resize', onResize);
    
        function onResize(width){
        var width = document.documentElement.clientWidth;

        var logo = document.getElementsByClassName("navigation__item-logo");
        
        if (width > 767) {
            
              if ($(document).scrollTop() > 100) {
                    $('nav').addClass('shrink');
                    $(logo).addClass('shrink-logo');
                    
                  } else {
                    $('nav').removeClass('shrink');
                    $(logo).removeClass('shrink-logo');
                  }
            
            }
        }
    });

});
