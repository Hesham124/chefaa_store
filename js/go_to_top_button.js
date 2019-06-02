$(document).ready(function() {

    "use strict";

    // Define Variables
    
    var goToTopButton = $(".top");

     // Start Showing and hiding scroll to top button
    
    $(window).on("scroll", function (event) {
        
        var scrollingTop = $(this).scrollTop();
        
        if (scrollingTop >= 1008) {
            
            goToTopButton.fadeIn(1500);
            
        } else {
            
            goToTopButton.fadeOut();
            
        }
        
    });
    
    // End Showing And Hiding Scroll To Top Button
    
    // Start Trigger the action of scroll to  top button
    
    goToTopButton.on("click", function (event) {
       
        $("html, body").animate({
            
            scrollTop : 0
            
        }, 1500);
        
    });
    
    // End Trigger The Action Of Scroll To Top Button

});