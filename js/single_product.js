$(document).ready(function() {

     "use strict";

     $("#carousel-slider, #carousel-slider-modal").carousel({
          interval : false
     }); // Disable The Autoplay Of The Carousel Slider..

     /*------------------------------------------------------------*/

     // Start Action When Clicking On The Carousel Slider Next Button

     $("#carousel-slider .carousel-control-next").on("click", function() {

         var activeProductImage = $(".single_product_images .active");
         var activeModalProductImage = $("#carousel-slider-modal .active");

         if(!activeProductImage.is(":last-child")) {

          activeProductImage.next().addClass("active").siblings("div").removeClass("active");

         }else {

          activeProductImage.removeClass("active");

          $(".single_product_images div").eq(0).addClass("active");

         }

         /*----------------------------------------------------------------*/

         if(!activeModalProductImage.is(":last-of-type")) {

            activeModalProductImage.next().addClass("active").siblings("div").removeClass("active");

         }else {

            activeModalProductImage.removeClass("active");

            $("#carousel-slider-modal .carousel-inner div").eq(0).addClass("active");

         }

     });

     // End Action When Clicking On The Carousel Slider Next Button

     // Start Action When Clicking On The Carousel Slider Previous Button

     $("#carousel-slider .carousel-control-prev").on("click", function() {

          var activeProductImage = $(".single_product_images .active");

          var activeModalProductImage = $("#carousel-slider-modal .carousel-item.active");
 
          if(!activeProductImage.is(":first-child")) {
 
           activeProductImage.prev().addClass("active").siblings("div").removeClass("active");
 
          }else {
 
           activeProductImage.removeClass("active");
 
           $(".single_product_images div:last-child").addClass("active");
 
          }

          /*-------------------------------------------------------------------*/

          /*----------------------------------------------------------------*/

         if(!activeModalProductImage.is(":first-of-type")) {

            activeModalProductImage.prev().addClass("active").siblings("div").removeClass("active");

         }else {

            activeModalProductImage.removeClass("active");

            $("#carousel-slider-modal .carousel-inner div:last-of-type").addClass("active");

         }
 
      });

      // End Action When Clicking On The Carousel Slider Previous Button

      // Start Adding Class Active On The Clickable Single Product Image 
 
      var itemIndex = 0; // init item index 

      $(".single_product_images > div").on("click", function() {

          $(this).addClass("active").siblings("div").removeClass("active");

          itemIndex = parseInt($(this).index());

          $("#carousel-slider-modal .carousel-inner .carousel-item").eq(itemIndex).addClass("active");

          $("#carousel-slider-modal .carousel-inner .carousel-item").eq(itemIndex).siblings("div").removeClass("active");

      }); 

      // End Adding Class Active On The Clickable Single Product Image 

      /*----------------------*/ 

});

