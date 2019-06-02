// Start JQuery Code 

/*global $,document,console */

$(document).ready(function () {
    
    "use strict";
    
    // Define Variables
    
    var goToTopButton = $(".top");
    
    // Get Screen Width When Resize... [ For testing Only ]
    
    $(window).resize(function () { console.log($(window).width()); });
    
    // Start Triggering The Owl Carousel 
    
    $('.owl-carousel').owlCarousel({

        // Start  Owl Carousel Slider Options 

        rtl      : true,

        nav      : true,

        autoplay : true,

        loop     : true,

        margin   : 25,

        navText  : ["<i class='fa fa-long-arrow-right' aria-hidden='true' ></i>",
                    "<i class='fa fa-long-arrow-left'  aria-hidden='true' ></i>" ],

        responsive : {

            0 : {
                items : 1
            },

            480 : {
                items : 2
            },

            768 : {
                items : 3
            },

            1000 : {
                items : 4
            }

        }

        // End Owl Carousel Slider Options 

    });
    
    // End Triggering The Owl Carousel 
    
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

    // Start Showing The Search Bar
    
    $("#store_features #user_infos form i").on("click", function () {
        
        $("#store_features #user_infos form input").css({
            
            "width"  : "100%",
            
            "border" : "2px solid #FFF"
            
        }).focus();
        
    });

    // End Showing The Search Bar

    // Start Hiding The Search Bar
    
    $("#store_features #user_infos form input").on("blur", function () {
        
        $(this).css({
            
            "border" : "none",
            
            "width" : "9%"
            
        });
        
    });

    // End Hiding The Search Bar

    // Start Showing And Hiding The Login Section
    
    $("#store_features #user_infos #login_info").on("click", function () {
        
        $("#store_features #user_infos #login_info div").toggleClass("activeLoginInfo");
        
    });

    // End Showing And Hiding The Login Section

    // Start Triggering The Nice Scroll Plugin

    // Start Triggering Nice Scroll Plugin.
    
    $("html").niceScroll({
        
        cursorcolor        : '#37B44E',
        
        cursorwidth        : '9px',
        
        cursorborder       : '1px solid #37B44E',
        
        cursorborderradius : 0
        
    });

    // End Triggering Nice Scroll Plugin
    
});

// End JQuery Code 