// Start JQuery Code 

/*global $,document,console */

$(document).ready(function () {
    
    "use strict";
    
    // Get Screen Width When Resize... [ For testing Only ]
    
    $(window).resize(function () { console.log($(window).width()); });

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