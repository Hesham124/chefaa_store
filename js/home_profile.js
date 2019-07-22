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

});

/* End JS [ JQuery ] Code */