$(document).ready(function() {

     // Start Loading Screen

    $(window).load(function() {

        $(".preloader .spinner").fadeOut(2000, function() {
 
            $(this).parent().fadeOut(2000,function() {
 
                $("body").css("overflow-y","auto");
 
                $(this).remove();
 
            });
 
        });    
 
     });
 
     // End Loading Screen

});