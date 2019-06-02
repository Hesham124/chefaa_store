// Start JQuery Code 

/*global $,document,console */

$(document).ready(function () {
    
    "use strict";
    
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
    
});

// End JQuery Code 