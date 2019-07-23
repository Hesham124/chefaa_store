<!-- Start Include Website Header -->
<?php require("header.php"); ?>
<!-- End Include Website Header -->

<!-- Start Calling Home Profile CSS File -->
<link rel = "stylesheet" href = "css/home_profile.css" />
<!-- End Calling Home Profile CSS File -->

<!-- Start Home Profile Page Content -->

<div id = "home_profile_tabs_content" class = "home_profiles_tabs_content" >
     <div class = "container" >
          <div class = "row" >
              <div class = "col-lg-3" ></div>
              <div class = "col-xs-12 col-sm-12 col-md-9 col-lg-9" >
                   <div class = "tabs_content" >
                       <div id = "address_content" >
                           <!-- Start Current Addresses -->
                           <div class = "current_addresses active_address_tab" >
                                <div class = "title" >
                                    <h6> عناوين الشحن </h6>
                                </div>
                                <div class = "addresses" >
                                    <div class = "row" >
                                        <div class = "col-xs-12 col-sm-12 col-md-5 col-lg-5" >
                                          <div class = "location_infos" >
                                                <!-- Start Location Icons -->
                                                <div class = "location_icons" >
                                                    <div class = "location_icon" >
                                                        <span> <i class="fa fa-map-marker" aria-hidden="true"></i> </span>
                                                    </div>
                                                    <div class = "dots_icon" >
                                                        <span> <i class="fa fa-ellipsis-h" aria-hidden="true"></i> </span>
                                                    </div>
                                                </div> 
                                                <!-- End Location Icons -->
                                                <!-- Start Location Info -->
                                                <div class = "location_info" >
                                                    <h6> الاسم </h6>
                                                    <p> محمد احمد عبد الحميد </p>
                                                    <h6> العنوان </h6>
                                                    <p>
                                                    شارع 151 مبنى 4 الدور التاسع شقة رقم 903 المعادى - القاهرة
                                                    </p>
                                                    <h6>  رقم الاتصال </h6>
                                                    <p> 07775200 </p>
                                                </div>
                                                <!-- End Location Info -->
                                                <!-- Start Verified Location -->
                                                <div id = "verified_location" title = "verified_location ?" class = "verified_location" >
                                                    <span>
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <!-- End Verified Location -->
                                            </div>
                                        </div>
                                        <div class = "col-xs-12 col-sm-12 col-md-5 col-lg-5" >
                                           <div class = "location_infos inactive_location" >
                                                <!-- Start Location Icons -->
                                                <div class = "location_icons" >
                                                    <div class = "location_icon" >
                                                        <span> <i class="fa fa-map-marker" aria-hidden="true"></i> </span>
                                                    </div>
                                                    <div class = "dots_icon" >
                                                        <span> <i class="fa fa-ellipsis-h" aria-hidden="true"></i> </span>
                                                    </div>
                                                </div> 
                                                <!-- End Location Icons -->
                                                <!-- Start Location Info -->
                                                <div class = "location_info" >
                                                    <h6> الاسم </h6>
                                                    <p> محمد احمد عبد الحميد </p>
                                                    <h6> العنوان </h6>
                                                    <p>
                                                    شارع 151 مبنى 4 الدور التاسع شقة رقم 903 المعادى - القاهرة
                                                    </p>
                                                    <h6>  رقم الاتصال </h6>
                                                    <p> 07775200 </p>
                                                </div>
                                                <!-- End Location Info -->
                                                <!-- Start Verified Location -->
                                                <div id = "verified_location" title = "verified location ?"  class = "verified_location" >
                                                    <span>
                                                    <i class="fa fa-check" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <!-- End Verified Location -->
                                            </div>
                                        </div>
                                        <div class = "col-xs-12 col-sm-12 col-md-5 col-lg-5" >
                                                <div class = "add_location" >
                                                    <a>
                                                        <span>
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                        <p> اضافة<br /> عنوان جديد </p>
                                                    </a>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <!-- End Current Addresses -->
                           <!-- Start Add New Location -->
                           <div class = "add_new_address" >
                                <!-- Start back to addresses -->
                                <div class = "back_to_addresses" >
                                    <ul>
                                        <li>
                                           <a href = "#" >
                                                <span>
                                                    العودة لعناوين الشحن
                                                </span>
                                                <span>
                                                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                                                </span>
                                           </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- End Back To Addresses -->
                                <div>
                                    <!-- Start Title -->
                                    <div class = "title" >
                                        <h6> عناوين الشحن </h6>
                                    </div>
                                    <!-- End Title -->
                                    <!-- Start Add Address Content -->
                                    <div class = "add_address_content" >
                                        <form id = "add_address" action = "" method = "post" >
                                            <!-- Start Client Name -->
                                            <div class = "form-group" >
                                                <label for = "client_name" > الاسم </label>
                                                <input type = "text" name = "client_name" class = "form-control" id = "client_name" placeholder = "الاسم" maxlength = "20" />
                                            </div>
                                        <!-- End Client Name -->
                                        <!-- Start Client Phone Number -->
                                            <div class = "form-group" >
                                                <label for = "client_phone" > رقم الاتصال  </label>
                                                <input type = "text" name = "client_phone" id = "client_phone" class = "form-control" placeholder = "رقم الاتصال" maxlength = "11" onkeypress = "return isNumberKey(event)" />
                                            </div>
                                            <!-- End Client Phone Number -->
                                            <!-- Start Client Address -->
                                            <div class = "form-group" >
                                                <label for = "client_address" > العنوان </label>
                                                <textarea name = "client_address" class = "form-control" id = "client_address" rows = "2" placeholder = "العنوان" maxlength = "85" ></textarea>
                                            </div>
                                            <!-- End Client Address -->
                                            <!-- Start Submit Button -->
                                            <div class = "submit-button" >
                                                <button type="submit" class="btn btn-primary">  حفظ العنوان </button>
                                            </div>
                                            <!-- End Submit Button -->
                                        </form>
                                    </div>
                                    <!-- End Add Address Content -->
                                </div>
                           </div>
                           <!-- End Add New Location -->
                       </div>
                   </div>
              </div>
          </div>
     </div>
</div>

<!-- End Home Profile Page Content -->

<!-- Start Include Website Footer -->
<?php require("footer.php"); ?>
<!-- End Include Website Footer -->

<!-- Start Calling JQuery Validation plugin -->
<script src = "js/jquery.validate.min.js" ></script>
<!-- End Calling JQuery Validation Plugin -->

<!-- Start Calling Home Profile JS File -->
<script src = "js/home_profile.js" ></script>
<!-- End Calling Home Profile JS File -->

<script>
    // Start Function [ isNumberKey ] That Allows To Enter Numbers Only

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
           return false; 
           return true;
    }

    // End Function [ isNumberKey ] That Allows To Enter Numbers Only
</script>