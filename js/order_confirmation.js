/* Start JQuery Code */

$(document).ready(function() {

    "use strict";

    // Action occures When Click On The Return To Store Button...

    var go_to_store_button = $("#confirmation_message .message_content button"); // cache return to store button in variable

    go_to_store_button.on("click", function() {

        window.location.href = "/chefaa_store";

    });

});

/* End JQuery Code */