$(document).ready(function() {

    "use strict";

    // Start Validation Of Add Address Form..

    $("#add_address").validate({
        
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

    // Start Switch Tabs Behaviour In Payment Methods Step

    $(".step_content .payment_ways ul li").on("click", function() {

        if(!($(this).hasClass("active"))) {

            // Get The ID Of The Clicked List Item

            var tabId = $(this).attr("id");

            // Add Class Active To The Clicked List Item And Remove It From Its Siblings

            $(this).addClass("active").siblings("li").removeClass("active");

            // Hide All Tabs Contents When Clicking On Any List Item

            $(".step_content .payment_ways .payment_methods_content > div").hide();

            // Show The Content That Is Related With Its Tab

            $("#" + tabId + "_content").fadeIn(1000);

        }

    });
     
    // End Switch Tabs Behaviour In Payment Methods Step

    // Start Validation Of Card Number Input

    $('#card_number').on('keyup', function() {
        var foo = $(this).val().split(" ").join(""); 
        if (foo.length > 0) {
            foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
        }
        $(this).val(foo);
    });

    // End Validation Of Card Number Input

});