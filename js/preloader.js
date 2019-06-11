$(document).ready(function() {

    "use strict";

     // Start Loading Screen

    $(window).load(function() {

        $(".preloader .spinner").fadeOut(1500, function() {
 
            $(this).parent().fadeOut(1500,function() {
 
                $("body").css("overflow-y","auto");
 
                $(this).remove();
 
            });
 
        });    
 
     });
 
     // End Loading Screen

});