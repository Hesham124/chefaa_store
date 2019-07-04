$(document).ready(function() {

    "use strict";

    // Start Validation Of Add Address Form..

    $("#add_address").validate({
        
        rules: {

            // Start Client Name Validation

            client_name : {
                required  : true,
                maxlength : 20
            } 

            // End Client Name Validation

            ,

            // Start Client Address Validation

            client_address : {
                required  : true,
                minlength : 40,
                maxlength : 85
            }

            // End Client Address Validation

            ,

            // Start Client Phone Validation

            client_phone : {
               required  : true,
               number    : true,
               minlength : 11
            }

            // End Client Phone Validation
            
        },

        messages: {

            // Start Client Name Validation Error Messages
            
            client_name : {
                required  : "<div class = 'add_address_error_message' >  من فضلك قم بادخال الاسم </div>" ,
                maxlength : "<div class = 'add_address_error_message' > من فضلك قم بادخال مالايزيد عن 20 حرف  </div>"
            }

            // End Client Name Validation Error Messages 

            ,

            // Start Client Address Validation Error Messages

            client_address : {
                required  : "<div class = 'add_address_error_message' > من فضلك قم بادخال العنوان </div>",
                minlength : "<div class = 'add_address_error_message' > من فضلك قم بادخال 40 حرف على الاقل </div>",
                maxlength : "<div class = 'add_address_error_message' > من فضلك قم بادخال ما لايزيد عن 85 حرف </div>"
            }

            // Start Client Address Validation Error Messages

            ,

            // Start Client Phone Error Validation Messages

            client_phone : {
                 required  : "<div class = 'add_address_error_message' > من فضلك قم بادخال رقم الاتصال </div>",
                 number    : "<div class = 'add_address_error_message' > من فضلك قم بادخال ارقام فقط  </div>",
                 minlength : "<div class = 'add_address_error_message' > من فضلك ادخل 11 رقم على الاقل </div>"
            }

            // End Client Phone Error Validation Messages
            
        }

     });

    // End Validation Of Add Address Form

});