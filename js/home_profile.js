/* Start JS [ JQuery ] Code */

$(document).ready(function() {

    "use strict";

    // Start Action When Clicking On Verified Location Button

    $(".verified_location").on("click", function() {

        if( $(this).parent().hasClass("inactive_location") ) {

           $(this).parent().removeClass("inactive_location");

           $(this).parent(".location_infos").parent().siblings().find(".location_infos").addClass("inactive_location");

        }

    });

    // End Action When Clicking On Verified Location Button

    // Start Validation Of Add Address Form..

    $(".add_address_content #add_address").validate({
        
        rules: {

            // Start Client Name Validation

            client_name : {
                required  : true,
                minlength : 20
            } 

            // End Client Name Validation

            ,

            // Start Client Address Validation

            client_address : {
                required  : true,
                minlength : 40
            }

            // End Client Address Validation

            ,

            // Start Client Phone Validation

            client_phone : {
               required  : true,
               minlength : 11
            }

            // End Client Phone Validation
            
        },

        messages: {

            // Start Client Name Validation Error Messages
            
            client_name : {
                required  : "<div class = 'add_address_error_message' >  من فضلك قم بادخال الاسم </div>" ,
                minlength : "<div class = 'add_address_error_message' > من فضلك قم بادخال 20 حرف على الاقل </div>"
            }

            // End Client Name Validation Error Messages 

            ,

            // Start Client Address Validation Error Messages

            client_address : {
                required  : "<div class = 'add_address_error_message' > من فضلك قم بادخال العنوان </div>",
                minlength : "<div class = 'add_address_error_message' > من فضلك قم بادخال 40 حرف على الاقل </div>"
            }

            // Start Client Address Validation Error Messages

            ,

            // Start Client Phone Error Validation Messages

            client_phone : {
                 required  : "<div class = 'add_address_error_message' > من فضلك قم بادخال رقم الاتصال </div>",
                 minlength : "<div class = 'add_address_error_message' > من فضلك ادخل 11 رقم على الاقل </div>"
            }

            // End Client Phone Error Validation Messages
            
        }

     });

    // End Validation Of Add Address Form

    /* Start Address Content Switch Tabs */

    $("#home_profile_tabs_content .add_location a").on("click", function(event) {

        event.preventDefault();

        $(this).parent().parent().parent().parent().parent().removeClass("active_address_tab").fadeOut(1000, function() {

            $("#home_profile_tabs_content .add_new_address").addClass("active_address_tab").fadeIn(1000);

        });
         
    });

    $("#home_profile_tabs_content .back_to_addresses a").on("click", function(event) {

        event.preventDefault();

        $(this).parent().parent().parent().parent().removeClass("active_address_tab").fadeOut(1000, function() {

            $("#home_profile_tabs_content .current_addresses").addClass("active_address_tab").fadeIn(1000);

        });
         
    });

    /* End Address Content Switch Tabs */

});

/* End JS [ JQuery ] Code */