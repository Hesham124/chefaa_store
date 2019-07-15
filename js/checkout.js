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

    // Start Purchase Form Validation

    $("#shopping_form").validate({
        
        rules: {

            // Start Card Number Validation

            card_number : {
                required : true,
                minlength : 14
            }

            // End Card Number Validation

            ,

            // Start Expiration Date Validation


            expiration_date : {
                required : true
            }

            // End Expiration Date Validation

            ,

            // Start CVV Validation

            cvv : {
                required : true,
                minlength : 3
            }

            // End CVV Validation
            
        },

        messages: {

            // Start Card Number Error Validation Message

            card_number : {
                required : "<div class  = 'payment_method_error_message' > من فضلك ادخل رقم الكارت </div>",
                minlength : "<div class = 'payment_method_error_message' > من فضلك ادخل فيما لايقل عن 12 رقم </div>"
            }

            // End Card Number Error Validation Message

            ,

            // Start Expiration Date Error Validation Message

            expiration_date : {
                required : "<div class  = 'payment_method_error_message' >  من فضلك ادخل تاريخ الصلاحية </div>"
            }
              
            // End Expiration Date Error Validation Message

            ,

            // Start CVV Validation Message

            cvv : {
                required : "<div class = 'payment_method_error_message' > من فضلك ادخل cvv code </div>",
                minlength : "<div class = 'payment_method_error_message' > من فضلك ادخل فيما لايقل عن 3 ارقام </div>"
            }
             
            // End CVV Validation Message
            
        }

     });

    // End Purchase Form Validation
    
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

    // Start Activation Of Purchase Process Steps
    
        var current_sc, next_sc, previous_sc;

        // Start Action When Clicking On A Next Button

        $(".next").click(function(){
            
            current_sc = $(this).parent().parent().parent();
            next_sc = $(this).parent().parent().parent().next(); 
                                                               
            current_sc.fadeOut(1000, function() {
                //activate next step on progressbar using the index of next_sc
                $("#progressbar li").eq($(".step_content").index(next_sc)).addClass("active");
                next_sc.fadeIn(1000);    
            });
            
        });

        // End Action When Clicking On A Next Button

        // Start Action When Clicking On A Previous Button 

        $(".previous").click(function(){
        
            current_sc = $(this).parent().parent().parent();
            previous_sc = $(this).parent().parent().parent().prev();
            
            current_sc.fadeOut(1000, function() {
                //de-activate current step on progressbar
                $("#progressbar li").eq($(".step_content").index(current_sc)).removeClass("active");
                previous_sc.fadeIn(1000);
            });
            
        });

        // End Action When Clicking On A Previous Button

    // End Activation Of Purchase Process Steps

    // start validation of payment method step

      var confirmPaymentMethodButton = $("#confirmPaymentMethodButton");

     $("#payment_methods_tabs ul li").on("click", function() {

        if( $(this).attr("id") == "payment_method_1" ) {
            confirmPaymentMethodButton.removeClass("next action-button");
            confirmPaymentMethodButton.removeAttr("formnovalidate");
        }else {
            confirmPaymentMethodButton.addClass("next action-button");
            confirmPaymentMethodButton.attr("formnovalidate","formnovalidate");
        }

     });

    // end validation of payment method step

    // Start Action Of Confirm Payment Method Button

    $("#confirmPaymentMethodButton").on("click", function(event) {

        if($("#shopping_form").valid()){   

            event.preventDefault();

            current_sc = $(this).parent().parent().parent();
            next_sc = $(this).parent().parent().parent().next(); 
                                                               
            current_sc.fadeOut(1000, function() {
                //activate next step on progressbar using the index of next_sc
                $("#progressbar li").eq($(".step_content").index(next_sc)).addClass("active");
                next_sc.fadeIn(1000);    
            });
            
        }
 
     });

    // End Action Of Confirm Payment Method Button

});