/* Start JS [ JQuery ] Code */

$(document).ready(function() {

     "use strict";

     // Start Front End Action When Clicking On Pagination Links [ Not Arrows ]

     $("#category_products #pagination ul li:not(.arrow) a").on("click", function() {

          $(this).parent("li").addClass("active");

          $(this).parent("li").siblings("li").removeClass("active");

     });

     // End Front End Action When Clicking On Pagination Links [ Not Arrows ]

});

/* End JS [ JQuery ] Code */