<!-- Start Calling Website Header -->
<?php require("header.php"); ?>
<!-- End Calling Website Header -->
<!-- Start Calling JQuery UI Library CSS File -->
<link rel = 'stylesheet' href = 'css/jquery-ui.min.css' />
<!-- End Calling JQuery UI Library CSS File -->
<link rel = 'stylesheet' href = 'css/checkout.css' /> <!-- Checkout CSS File -->

<!-- Start Checkout Page Content -->

<!-- Start Modals -->

<!-- Start Add New Location Modal -->

<div class="modal fade" id="add_new_location" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
     <!--  Start Modal Header -->
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> اضافة عنوان </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- End Modal Header -->
      <hr />
      
      <form id = "add_address" action = "" method = "post" enctype = "multipart/form-data" >

            <!-- Start Modal Body -->

            <div class="modal-body">
                <div id = "new_location_infos" class = "new_location_infos" >
                        <!-- Start Client Name -->
                        <div class = "form-group" >
                            <label for = "client_name" > الاسم </label>
                            <input type = "text" name = "client_name" class = "form-control" id = "client_name" placeholder = "الاسم" />
                        </div>
                        <!-- End Client Name -->
                        <!-- Start Client Address -->
                        <div class = "form-group" >
                            <label for = "client_address" > العنوان </label>
                            <textarea name = "client_address" class = "form-control" id = "client_address" rows = "3" placeholder = "العنوان" ></textarea>
                        </div>
                        <!-- End Client Address -->
                        <!-- Start Client Phone Number -->
                        <div class = "form-group" >
                            <label for = "client_phone" > رقم الاتصال  </label>
                            <input type = "text" name = "client_phone" id = "client_phone" class = "form-control" placeholder = "رقم الاتصال" maxlength = "11" />
                        </div>
                        <!-- End Client Phone Number -->
                </div>
            </div>

            <!-- End Modal Body -->
            
            <!-- Start Modal Footer -->

            <div class="modal-footer">
                <button type="submit" class="btn btn-primary"> اضافة عنوان </button>
            </div>
            
            <!-- End Modal Footer -->

      </form>
      <!-- Start Add Address Status -->
      <div id = "add_location_result" > </div>
      <!--  End Add Address Status -->
    </div>
  </div>
</div>

<!-- End Add New Location Modal -->

<!-- End Modals -->

<section id = "checkout" class = "checkout" >
    <div class = "container" >
        <div class = "row" >
            <div class = "col-lg-12" >
            <!-- Start Shopping Card -->
                <div class = "shopping_card" >
                    <ul>
                       <li>
                          <a href = "cart_page.php" >
                             <span>
                                 <i class="fa fa-long-arrow-right fa-fw" aria-hidden="true"></i>
                             </span>
                             <span>
                                  سلة المشتريات
                             </span>
                          </a>
                       </li>
                    </ul>
                </div>
            <!-- End Shopping Card -->
            </div>
        </div>
    </div>
</section>

<!-- Start Purchasing Form -->

<section id = "purchase_form" class = "purchase_form" >
      <!-- Start Purchase Form -->
      <form action = "" method = "" enctype = "multipart/form-data" >
         <!-- Start Form Steps -->
         <ul id = "progressbar" >
             <li class = "active" >
                 <span> العنوان </span>
             </li>
             <li>
                 <span> طرق الدفع </span>
             </li>
             <li>
                 <span> تاكيد الطلب </span>
             </li>
         </ul>

         <!-- Start [Address] Steps Content -->

         <!-- <div class = "step_content" >
             <div class = "container" >
                 <div class = "row" >
                     <div class = "col-xs-12 col-sm-12 col-md-6 col-lg-4" >
                        <div class = "location_infos" > -->
                            <!-- Start Location Icons -->
                           <!-- <div class = "location_icons" >
                                <div class = "location_icon" >
                                    <span> <i class="fa fa-map-marker" aria-hidden="true"></i> </span>
                                </div>
                                <div class = "dots_icon" >
                                    <span> <i class="fa fa-ellipsis-h" aria-hidden="true"></i> </span>
                                </div>
                            </div> -->
                            <!-- End Location Icons -->
                            <!-- Start Location Info -->
                            <!-- <div class = "location_info" >
                                <h6> الاسم </h6>
                                <p> محمد احمد عبد الحميد </p>
                                <h6> العنوان </h6>
                                <p>
                                   شارع 151 مبنى 4 الدور التاسع شقة رقم 903 المعادى - القاهرة
                                </p>
                                <h6>  رقم الاتصال </h6>
                                <p> 07775200 </p>
                            </div> -->
                            <!-- End Location Info -->
                            <!-- Start Verified Location -->
                           <!-- <div id = "verified_location" title = "verified" >
                                <span>
                                   <i class="fa fa-check" aria-hidden="true"></i>
                                </span>
                            </div> -->
                            <!-- End Verified Location -->
                        <!-- </div> -->
                     <!-- </div> -->
                    <!-- <div class = "col-xs-12 col-sm-12 col-md-6 col-lg-4" >
                        <div class = "add_location" >
                            <a data-toggle="modal" data-target="#add_new_location" >
                                <span>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                </span>
                                <p> اضافة<br /> عنوان جديد </p>
                            </a>
                        </div>
                     </div>
                 </div>
                 <hr />
                 <div>
                    <input type = "button" name = "next" class = "next action-button" value = "طرق الدفع" />
                 </div>
             </div>
         </div> --> 
 
         <!-- End [Address] Steps Content -->

         <!-- Start Order Confirmation Step Content -->

         <div class = "step_content" >
             <div class = "container" >
                 <div class = "row" >
                     <div class = "col-lg-8" >
                        <div class = "products" >
                             <div class = "heading" >
                                 <h6> المنتجات </h6>
                             </div>
                        </div>
                     </div>
                     <div class = "col-lg-4" >
                         
                     </div>
                 </div>
             </div>
         </div>

         <!-- End Order Confirmation Step Content -->

         <!-- End Form Steps -->
      </form>
      <!-- End Purchase Form -->
</section>

<!-- End Purchasing Form -->

<!-- End Checkout Page Content -->

<!-- Start Calling Website Footer -->
<?php require("footer.php"); ?>
<!-- End Calling Website Footer --> 
<!-- Start Calling JQuery UI Library JS File -->
<script src = "js/jquery-ui.min.js" ></script>
<!-- End Calling JQuery UI Library JS File -->
<!-- Start Calling JQuery Easing Library -->
<script src = "js/jquery.easing.1.3.min.js" ></script>
<!-- End Calling JQuery Easing Library -->
<!-- Start Calling JQuery Validation plugin -->
<script src = "js/jquery.validate.min.js" ></script>
<!-- End Calling JQuery Validation Plugin -->
<script src = "js/checkout.js" ></script> <!-- Checkout JS File -->