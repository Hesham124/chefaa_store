$(document).ready(function() {

     "use strict";

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