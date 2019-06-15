$(document).ready(function() {

     "use strict";

     $("#carousel-slider").carousel({
          interval : false
     }); // Disable The Autoplay Of The Carousel Slider..

     /*------------------------------------------------------------*/

     // Start Action When Clicking On The Carousel Slider Next Button

     $(".carousel-control-next").on("click", function() {

         var activeProductImage = $(".single_product_images .active");

         if(!activeProductImage.is(":last-child")) {

          activeProductImage.next().addClass("active").siblings("div").removeClass("active");

         }else {

          activeProductImage.removeClass("active");

          $(".single_product_images div").eq(0).addClass("active");

         }

     });

     // End Action When Clicking On The Carousel Slider Next Button

     // Start Action When Clicking On The Carousel Slider Previous Button

     $(".carousel-control-prev").on("click", function() {

          var activeProductImage = $(".single_product_images .active");
 
          if(!activeProductImage.is(":first-child")) {
 
           activeProductImage.prev().addClass("active").siblings("div").removeClass("active");
 
          }else {
 
           activeProductImage.removeClass("active");
 
           $(".single_product_images div:last-child").addClass("active");
 
          }
 
      });

      // End Action When Clicking On The Carousel Slider Previous Button

      // Start Adding Class Active On The Clickable Single Product Image 

      $(".single_product_images > div").on("click", function() {

          $(this).addClass("active").siblings("div").removeClass("active");

      }); 

      // End Adding Class Active On The Clickable Single Product Image 

});