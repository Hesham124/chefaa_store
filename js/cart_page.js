$(document).ready(function() {

    "use strict";

     $("#cart_page_fav_products #pagination ul li:not(.arrow) a").on("click", function() {

        $(this).parent("li").addClass("active");

        $(this).parent("li").siblings("li").removeClass("active");

    });

});