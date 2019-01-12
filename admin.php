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
                    <div class="col-lg-4 col-sm-6 ">
                        <div class="white-box">
                            <h3 class="box-title">Users</h3>
                            <ul class="list-inline two-part">
                                <!-- <li><i class="icon-user text-info"></i></li> -->
                                <li class="text-right"><span class="counter text-info" id="totalUsers">0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 ">
                        <div class="white-box">
                            <h3 class="box-title">Total Roles</h3>
                            <ul class="list-inline two-part">
                                <!-- <li><i class="icon-graduation text-purple"></i></li> -->
                                <li class="text-right "><span class="counter text-purple">4</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 ">
                        <div class="white-box">
                            <h3 class="box-title">Total Batches</h3>
                            <ul class="list-inline two-part">
                                <!-- <li><i class="icon-doc text-success"></i></li> -->
                                <li class="text-right"><span class="counter text-success" id="totalBatch">0</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--row -->
                <!-- /.row -->
                

                               <!-- row -->
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="white-box">
                             <a href="javascript:void(0);" class="btn btn-info pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light" onclick="javascript:$('#batchFormModel').modal();">Create Batch</a>
                            <h3 class="box-title">Batches Overview</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview" id="adminBatchTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Batch ID</th>
                                            <th scope="col">QR-Qode</th>
                                            <th scope="col">Supplier</th>
                                            <th colspan="2" scope="col">Factory</th>
                                            <th colspan="2" scope="col">Distributor</th>
                                            <th scope="col">Drugstore</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         <tr>
                                             <td colspan="9" align="center">No Data Available</td>
                                         </tr>   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Your Address</h3>
                            <ul class="list-inline two-part">
                                <li class="text-right" id="currentUserAddress">0x0000000000000000000000000000000000000000</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                           <h3 class="box-title">Storage Contract Address</h3>
                            <ul class="list-inline two-part">
                                <li class="text-right" id="storageContractAddress">0x0000000000000000000000000000000000000000</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Drug Supplychain Contract Address</h3>
                            <ul class="list-inline two-part">
                                <li class="text-right" id="drugSupplychainContractAddress">0x0000000000000000000000000000000000000000</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="white-box">
                           <h3 class="box-title">User Contract Address</h3>
                            <ul class="list-inline two-part">
                                <li class="text-right" id="userContractAddress">0x0000000000000000000000000000000000000000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!--row -->
                <div class="row">
                    <div class="col-md-12 col-lg-4 col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">User Roles</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview">
                                    <thead>
                                        <tr>
                                            <th>Role Name</th>
                                            <th>Role Slug</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Supplier</td>
                                            <td><span class="label label-success font-weight-100">SUPPLIER</span></td>
                                        </tr>
                                         <tr>
                                            <td>Factory</td>
                                            <td><span class="label label-info font-weight-100">FACTORY</span></td>
                                        </tr>
                                        <tr>
                                            <td>Distributor</td>
                                            <td><span class="label label-warning font-weight-100">DISTRIBUTOR</span></td>
                                        </tr>
                                        <tr>
                                            <td>Drugstore</td>
                                            <td><span class="label label-primary font-weight-100">DRUGSTORE</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-8 col-sm-12">
                        <div class="white-box">
                             <a href="javascript:void(0);" id="userFormClick" class="btn btn-info pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">Create User</a>
                            <h3 class="box-title">Users</h3> 
                            <div class="table-responsive">
                                <table class="table product-overview table-responsive" id="tblUser">
                                    <thead>
                                        <tr>
                                            <th>User Address</th>
                                            <th>Name</th>
                                            <th>Contact No.</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
  
            </div>
            <!-- /.container-fluid -->

            <div id="batchFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="userModelTitle">Add Batch</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form data-parsley-validate id="userForm" onsubmit="return false;">
                                <fieldset style="border:0;">
									<div class="form-group">
										<label class="control-label" for="registrationNo">Registration No <i style="color:red;">*</i></label>
										<input type="text" class="form-control" id="registrationNo" name="registrationNo" placeholder="Registration No" data-parsley-required="true">
									</div> 
									<div class="form-group">
										<label class="control-label" for="farmerName">Drug Name <i style="color:red;">*</i></label>
										<input type="text" class="form-control" id="drugName" name="drugName" placeholder="Drug Name" data-parsley-required="true">
									</div>    
								</fieldset>
<!--								<i style="display: none;" class="fa fa-spinner fa-spin"></i>-->
								 <button type="submit" onclick="addBatch()" class="fcbtn btn btn-primary btn-outline btn-1f pull-right">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="userFormModel" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none; padding-top: 170px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="userModelTitle">Add User</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div class="modal-body">
                            <form data-parsley-validate id="userForm" onsubmit="return false;">
                                <fieldset style="border:0;">
                                    <div class="form-group">
                                        <label class="control-label" for="userWalletAddress">User Wallet Address <i style="color:red;">*</i></label>
                                        <input type="text" class="form-control" id="userWalletAddress" name="userWalletAddress" placeholder="Wallet Address" data-parsley-required="true" minlength="42" maxlength="42">
                                    </div> 
                                    <div class="form-group">
                                        <label class="control-label" for="userName">User Name <i style="color:red;">*</i></label>
                                        <input type="text" class="form-control" id="userName" name="userName" placeholder="Name" data-parsley-required="true">
                                    </div>                              
                                    <div class="form-group">
                                        <label class="control-label" for="userContactNo">User Contact <i style="color:red;">*</i></label>
                                        <input type="text" class="form-control" id="userContactNo" name="userContactNo" placeholder="Contact No." data-parsley-required="true" data-parsley-type="digits" data-parsley-length="[10, 15]" maxlength="15">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="userRoles">User Role <i style="color:red;">*</i></label>
                                        <select class="form-control" id="userRoles" name="userRoles" style="display:block !important;">
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
                                    <div class="form-group">
                                    </div>
                                </fieldset>
<!--								<i style="display: none;" class="fa fa-spinner fa-spin"></i>-->
								 <button type="submit" onclick="userFormSubmit();" class="fcbtn btn btn-primary btn-outline btn-1f  pull-right" id="userFormBtn">Submit</button>
							</form>
                        </div>
                        <div class="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>

        <script type="text/javascript">
            var batchFormInstance, userFormInstance;
            $(document).ready(function(){
                // userFormInstance = $("#userForm").parsley();
                // batchFormInstance = $("#batchForm").parsley();

                initSwitch();
            });

            function initSwitch(){
                /*For User Form Pop Up*/
                 new Switchery($("#isActive")[0], $("#isActive").data());     
            }
        </script>

<?php include('templates/_footer.php');?>            