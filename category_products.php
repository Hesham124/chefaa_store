<!-- Start Calling Website Header -->
<?php require("header.php"); ?>
<!-- End Calling Website Header -->

<!-- Start Calling Category Products Css File -->
<link rel = "stylesheet" href = "css/category_products.css" />
<!-- End Calling Category Products Css File -->

<!-- Start Category Products Page Content -->

<section id = "category_products" class = "category_products" >
    <div class = "container" >
        <div class = "row" >
            <!-- Start Specified Category Information -->
            <div class = "col-lg-12" >
               <div id = "category_information" class = "category_information" >
                    <h5> عناية بالشعر </h5>
                    <span> توافر 34587 منتج </span>
               </div>
            </div>
            <!-- End Specified Category Information -->
            <!-- Start Specified Category Products Filteration -->
            <div class = "col-lg-12" >
                <div id = "category_products_filter" class = "category_products_filter" >
                    <select id = "products_filter" class = "products_filter" >
                        <option> الاكثر مبيعا </option>
                    </select>
                </div>
            </div>
            <!-- Start Specified Category Products Filteration -->
            <!-- Start Horizontal Line -->
            <div class = "col-lg-12" > <div> <hr /> </div> </div>
            <!-- End Horizontal Line -->
            <!-- Start Products List -->
            <div class = "col-lg-12" >
               <div id = "products" class = "products" >
                   <div class = "row" >
                       <div class = "col-lg-3" >
                           test 1
                       </div>
                       <div class = "col-lg-3" >
                           test 2
                       </div>
                       <div class = "col-lg-3" >
                           test 3 
                       </div>
                       <div class = "col-lg-3" >
                           test 4
                       </div>
                   </div>
               </div>
            </div>
            <!-- End Products List -->
        </div>
    </div>
</section>

<!-- End Category Products Page Content -->

<!-- Start Calling Website Footer -->
<?php require("footer.php"); ?>
<!-- End Calling Website Footer -->

<!-- Start Calling Category Products JS File -->
<script src = "js/category_products.js" ></script>
<!-- End Calling Category Products JS File -->