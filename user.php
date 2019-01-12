<?php include('templates/_header.php'); ?>
        

            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Dashboard</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-info" id="divOngoingTransaction" style="display: none">Ongoing Transaction: <span id="linkOngoingTransaction">None</span> </div>
                    </div>    
                </div>

                <!-- /.row -->
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        <div class="white-box">
                            <div class="user-bg"> <img width="100%" alt="user" src="plugins/images/heading-bg/slide3.jpg">
                                <div class="overlay-box">
                                    <div class="user-content">
                                        <a href="javascript:void(0)"><img src="images/NoProfile.jpg" id="userImage" class="thumb-lg img-circle" alt="img"></a>
                                        <h4 class="text-white" id="userName">--</h4>
                                        <h5 class="text-white" id="currentUserAddress">--</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="user-btm-box">
                                <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-purple"><i class="fa fa-mobile"></i> Contact No</p>
                                    <h1 id="userContact">--</h1>
                                </div>

                                <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-blue"><i class="fa fa-user"></i> Role</p>
                                    <h1 id="userRole">--</h1>
                                </div>
                                <div class="col-md-4 col-sm-4 text-center">
                                    <p class="text-danger"><i class="fa fa-gears"></i> Settings</p>
                                    <a class="btn btn-info m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light" id="editUser" href="javascript:void(0);" >Edit</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!--row -->
                <!-- /.row -->
                

                               <!-- row -->
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Batches Overview</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview" id="userBatchTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Batch ID</th>
                                            <th scope="col">Supplier</th>
                                            <th colspan="2" scope="col">Factory</th>
                                            <th colspan="2" scope="col">Distributor</th>
                                            <th scope="col">Drugstore</th>
                                            <th scope="col">View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         <tr>
                                             <td colspan="8" align="center">No Data Available</td>
                                         </tr>                                         
                                    </tbody>
                                </table>

                            <!-- Update User Form -->
                            <div id="userFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h2 class="modal-title" id="userModelTitle">Update Profile</h2>
                                    </div>

                                    <div class="modal-body">
                                        <form id="updateUserForm" onsubmit="return false;">
                                            <fieldset style="border:0;">
                                                <div class="form-group">
                                                    <label class="control-label" for="fullname">Full Name <i class="red">*</i></label>
                                                    <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Name" data-parsley-required="true">
                                                </div>                              
                                                <div class="form-group">
                                                    <label class="control-label" for="contactNumber">Contact No<i class="red">*</i></label>
                                                    <input type="text" class="form-control" id="contactNumber" name="contactNumber" placeholder="Contact No." data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label" for="role">Role </label>
                                                    <select class="form-control" id="role" disabled="true" name="role">
                                                        <option value="">Select Role</option>
                                                        <option value="SUPPLIER">Supplier</option>
                                                        <option value="FACTORY">Factory</option>
                                                        <option value="DISTRIBUTOR">Dristributor</option>
                                                        <option value="DRUGSTORE">Drugstore</option>
                                                    </select>    
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label" for="isActive">User Status</label>
                                                    <input type="checkbox" class="js-switch" data-color="#99d683" data-secondary-color="#f96262" id="isActive" name="isActive" data-size="small"/>
                                                </div>
                                            </fieldset>
                                        
                                    </div>
                                    <div class="modal-footer">
                                        <i style="display: none;" class="fa fa-spinner fa-spin"></i>
                                         <button type="button" class="btn btn-primary" id="userFormBtn">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <!-- Supplier Form -->
                            <form id="supplierForm" class="mfp-hide white-popup-block">
                                <h1>Supplier</h1><br>
                                <fieldset style="border:0;">                       
                                    <div class="form-group">
                                        <label class="control-label" for="supplierSendDate">Send Date</label>
                                        <input type="text" class="form-control datepicker-master" id="supplierSendDate" name="supplierSendDate" placeholder="Send Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="supplierFactoryName">Factory Name</label>
                                        <input type="text" class="form-control" id="supplierFactoryName" name="supplierFactoryName" placeholder="Factory Name" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="supplierItemName">Item Name</label>
                                        <input type="text" class="form-control" id="supplierItemName" name="supplierItemName" placeholder="Item Name" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="supplierQuantity">Quantity</label>
                                        <input type="text" class="form-control" id="supplierQuantity" name="supplierQuantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateSupplier" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Factory In Form -->
                            <form id="factoryInForm" class="mfp-hide white-popup-block">
                                <h1>Factory In</h1><br>
                                <fieldset style="border:0;">                       
                                    <div class="form-group">
                                        <label class="control-label" for="factoryInReceiveDate">Receive Date</label>
                                        <input type="text" class="form-control datepicker-master" id="factoryInReceiveDate" name="factoryInReceiveDate" placeholder="Receive Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factoryInItemName">Item Name</label>
                                        <input type="text" class="form-control" id="factoryInItemName" name="factoryInItemName" placeholder="Item Name" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factoryInQuantity">Quantity</label>
                                        <input type="text" class="form-control" id="factoryInQuantity" name="factoryInQuantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateFactoryIn" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Factory Send Form -->
                            <form id="factorySendForm" class="mfp-hide white-popup-block">
                                <h1>Factory Send</h1><br>
                                <fieldset style="border:0;">                       
                                    <div class="form-group">
                                        <label class="control-label" for="factorySendSendDate">Send Date</label>
                                        <input type="text" class="form-control datepicker-master" id="factorySendSendDate" name="factorySendSendDate" placeholder="Send Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factorySendDrugName">Drug Name</label>
                                        <input type="text" class="form-control" id="factorySendDrugName" name="factorySendDrugName" placeholder="Drug Name" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factorySendProductionNumber">Production Number</label>
                                        <input type="text" class="form-control" id="factorySendProductionNumber" name="factorySendProductionNumber" placeholder="Production Number" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factorySendProductionDate">Production Date</label>
                                        <input type="text" class="form-control datepicker-master" id="factorySendProductionDate" name="factorySendProductionDate" placeholder="Production Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factorySendExpiredDate">Expired Date</label>
                                        <input type="text" class="form-control datepicker-master" id="factorySendExpiredDate" name="factorySendExpiredDate" placeholder="Expired Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="factorySendQuantity">Quantity</label>
                                        <input type="number" class="form-control" id="factorySendQuantity" name="factorySendQuantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateFactorySend" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Distributor In Form -->
                            <form id="distributorInForm" class="mfp-hide white-popup-block">
                                <h1>Distibutor In</h1><br>
                                <fieldset style="border:0;">                       
                                    <div class="form-group">
                                        <label class="control-label" for="distributorInReceiveDate">Receive Date</label>
                                        <input type="text" class="form-control datepicker-master" id="distributorInReceiveDate" name="distributorInReceiveDate" placeholder="Receive Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="distributorInDrugName">Drug Name</label>
                                        <input type="text" class="form-control" id="distributorInDrugName" name="distributorInDrugName" placeholder="Drug Name" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="distributorInQuantity">Quantity</label>
                                        <input type="number" class="form-control" id="distributorInQuantity" name="distributorInQuantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateDistributorIn" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Distributor Send Form -->
                            <form id="distributorSendForm" class="mfp-hide white-popup-block">
                                <h1>Distibutor Send</h1><br>
                                <fieldset style="border:0;">                       
                                    <div class="form-group">
                                        <label class="control-label" for="distributorSendSendDate">Send Date</label>
                                        <input type="text" class="form-control datepicker-master" id="distributorSendSendDate" name="distributorSendSendDate" placeholder="Send Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="distributorSendDrugStoreName">Drugstore Name</label>
                                        <input type="text" class="form-control" id="distributorSendDrugStoreName" name="distributorSendDrugStoreName" placeholder="Drugstore Name" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="distributorSendQuantity">Quantity</label>
                                        <input type="number" class="form-control" id="distributorSendQuantity" name="distributorSendQuantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateDistributorSend" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            <!-- Drugstore Form -->
                            <form id="drugstoreForm" class="mfp-hide white-popup-block">
                                <h1>Drugstore</h1><br>
                                <fieldset style="border:0;">                       
                                    <div class="form-group">
                                        <label class="control-label" for="drugstoreReceiveDate">Receive Date</label>
                                        <input type="text" class="form-control datepicker-master" id="drugstoreReceiveDate" name="drugstoreReceiveDate" placeholder="Receive Date" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="drugstoreQuantity">Quantity</label>
                                        <input type="number" class="form-control" id="drugstoreQuantity" name="drugstoreQuantity" placeholder="Quantity" data-parsley-required="true">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="drugstoreAdditionalInfo">Additional Info</label>
                                        <input type="text" class="form-control" id="drugstoreAdditionalInfo" name="drugstoreAdditionalInfo" placeholder="Additional Info">
                                    </div>
                                     <div class="form-group float-right">
                                        <button type="reset" class="btn btn-default waves-effect" >Reset</button>
                                        <button type="button" id="updateDrugstore" class="btn btn-primary">Submit</button>
                                    </div>
                                </fieldset>
                            </form>

                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <!-- /.container-fluid -->

        <script type="text/javascript">
            var switchery;
            $(document).ready(function(){
                initSwitch();
                initDateTimePicker();
            });

            function initSwitch(){
                /*For User Form Pop Up*/
                switchery = new Switchery($("#isActive")[0], $("#isActive").data());    
            }

            function initDateTimePicker(){
                $('.datepicker-master').datetimepicker({
                    format: 'dd-mm-yyyy hh:ii:ss',
                    weekStart: 1,
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    forceParse: 0,
                    showMeridian: 1,
                    minuteStep: 1
                });
            }
        </script>
        
<?php include('templates/_footer.php');?>   