$(document).ready(function() {

     "use strict";

     // Start Triggering The Owl Carousel 
    
    $('.owl-carousel').owlCarousel({

        // Start  Owl Carousel Slider Options 

        rtl      : true,

        nav      : true,

        autoplay : true,

        loop     : true,

        margin   : 25,

        navText  : ["<i class='fa fa-long-arrow-right' aria-hidden='true' ></i>",
                    "<i class='fa fa-long-arrow-left'  aria-hidden='true' ></i>" ],

        responsive : {

            0 : {
                items : 1
            },

            480 : {
                items : 2
            },

            768 : {
                items : 3
            },

            1000 : {
                items : 4
            }

        }

        // End Owl Carousel Slider Options 

    });
    
    // End Triggering The Owl Carousel 

});