<!-- Start Calling Website Header -->
<?php require("header.php"); ?>
<!-- End Calling Website Header -->

<!-- Start Calling Single Product Page CSS File -->
<link rel = "stylesheet" href = "css/single_product.css" />
<!-- End Calling Single Product Page CSS File -->

<!-- Start Single Product Page -->

<section id = "single_product" class = "single_product" >
     <div class = "container" >
         <div class = "row" >
              <div class = "col-lg-6" >
                  <div class = "single_product_image" >
                    <div class = "discount" >40%</div>
                    <img src = "images/single_product.png" alt = "single_product_image" class = "img-responsive" style = "width:100% !important" />
                  </div>
              </div>
              <div class = "col-lg-6" >
                   <div class = "single_product_info" >
                       <span class = "product_title" > Himalaya</span> 
                       <p> كريم تفتيح الجسم من هيمالايا , 60 مل </p>
                       <div class = "product_price" >
                          <del> 50 جنيه  </del>
                          <span> 250 جنيه </span>
                          <span class = "price_saving" > وفرت 400 جنيه  </span>
                       </div>
                       <div class = "product_purchasing_details" >
                          <span> كمية  </span>
                          <ul>
                             <li>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                             </li>
                             <li>
                                <button> اضف للعربة </button>
                             </li>
                             <li>
                                <i class="fa fa-heart-o fa-2x fa-fw" aria-hidden="true"></i>
                             </li>
                          </ul>
                       </div>
                   </div>
              </div>
         </div>
     </div>
</section>

<section id = "single_product_details" class = "single_product_details" >
    <div class = "empty" ></div>
    <!-- Start Product Trademark -->
    <div class = "trade_mark" >
       <div class = "container" >
           <div class = "row" >
               <div class = "col-lg-12" >
                 <div class = "trade_mark_content" >
                 العلامة التجارية : <span> بيوبالاتس </span>
                 </div>
               </div>
           </div>
      </div>
    </div> 
    <!-- End Product Trademark -->
    <!-- Start Product Type -->
    <div class = "type" >
       <div class = "container" >
           <div class = "row" >
               <div class = "col-lg-12" >
                 <div class = "type_content" >
                     النوع : <span> كريم تفتيح </span>
                 </div>
               </div>
           </div>
      </div>
    </div> 
    <!-- End Product Type -->
</section>

<!-- End Single Product Page -->

<!-- Start Calling Website Footer -->
<?php require("footer.php"); ?>
<!-- End Calling Website Footer -->

<!-- Start Calling Single Product Page JS File -->
<script src = "js/single_product.js" ></script>
<!-- End Calling Single Product Page JS File -->