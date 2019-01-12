<?php include('templates/_header.php');?>
<?php 
     if(!isset($_GET['batchNo']) || (isset($_GET['batchNo']) && $_GET['batchNo']=='') &&
        !isset($_GET['txn']) || (isset($_GET['txn']) && $_GET['txn']=='')){
        echo "<script>window.location = 'index.php';</script>";
     }   
?>
<style type="text/css">
    .verified_info{
        color: green;
    }
</style>
<div class="container-fluid">
        <div class="container-fluid">
            <div class="row bg-title">
                <div class="col-lg-6 col-md-4 col-sm-4 col-xs-12">
                    <h3 class="page-title">Batch Progress </h3> 
                    <h4><b>Batch No: </b><?php echo $_GET['batchNo'];?></h4>
                </div>
                <div class="col-lg-6 col-sm-8 col-md-8 col-xs-12">
    
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- .row -->
            <section class="Notavail">
                <div class="row">
                    <div class="col-md-12">
                        <div class="white-box">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-badge danger">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="timeline-panel" id="adminSection">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Admin</h4>
                                            <p><small class="text-muted text-success activityDateTime">qwer</small> </p>
                                            <!-- <span class="activityQrCode"></span> -->
                                        </div>
                                        <div class="timeline-body">
                                            <table class="table activityData table-responsive" >
                                                <tr>
                                                    <td colspan="2"><p>Information Not Avilable</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-badge danger">
                                        <i class="fa fa-times"></i>
                                    </div>
                                    <div class="timeline-panel" id="supplierSection">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Supplier Send</h4>
                                            <p><small class="text-muted text-success activityDateTime"></small> </p>
                                            <!-- <span class="activityQrCode"></span> -->
                                        </div>
                                        <div class="timeline-body">
                                            <table class="table activityData table-responsive">
                                                <tr>
                                                    <td colspan="2"><p>Information Not Avilable</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted ">
                                    <div class="timeline-badge danger">
                                         <i class="fa fa-times"></i>
                                     </div>
                                     <div class="timeline-panel" id="factoryReceiveSection">
                                         <div class="timeline-heading">
                                             <h4 class="timeline-title">Factory Receive</h4>
                                             <p><small class="text-muted text-success activityDateTime"></small> </p>
                                             <!-- <span class="activityQrCode"></span> -->
                                         </div>
                                         <div class="timeline-body">
                                            <table class="table activityData table-responsive">
                                                <tr>
                                                    <td colspan="2"><p>Information Not Avilable</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                     </div>
                                 </li>
                                 <li class="timeline-inverted ">
                                     <div class="timeline-badge danger">
                                         <i class="fa fa-times"></i>
                                     </div>
                                     <div class="timeline-panel" id="factorySend">
                                         <div class="timeline-heading">
                                             <h4 class="timeline-title">Factory Send</h4>
                                             <p><small class="text-muted text-success activityDateTime"></small> </p>
                                             <!-- <span class="activityQrCode"></span> -->
                                         </div>
                                         <div class="timeline-body">
                                            <table class="table activityData table-responsive">
                                                <tr>
                                                    <td colspan="2"><p>Information Not Avilable</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                     </div>
                                 </li>
                                <li>
                                    <div class="timeline-badge danger">
                                        <i class="fa fa-times"></i>
                                    </div>
                                    <div class="timeline-panel" id="distributorRecieveSection"> 
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Distributor Receive</h4>
                                            <p><small class="text-muted text-success activityDateTime"></small> </p>
                                            <!-- <span class="activityQrCode"></span> -->
                                        </div>
                                        <div class="timeline-body">
                                            <table class="table activityData table-responsive">
                                                <tr>
                                                    <td colspan="2"><p>Information Not Avilable</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                </li>
                                <li>
                                <div class="timeline-badge danger">
                                    <i class="fa fa-times"></i>
                                </div>
                                <div class="timeline-panel" id="distributorSend"> 
                                    <div class="timeline-heading">
                                        <h4 class="timeline-title">Distributor Send</h4>
                                        <p><small class="text-muted text-success activityDateTime">asdf</small> </p>
                                        <!-- <span class="activityQrCode"></span> -->
                                    </div>
                                    <div class="timeline-body">
                                        <table class="table activityData table-responsive">
                                            <tr>
                                                <td colspan="2"><p>Information Not Avilable</p></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                </li>
                                <li class="timeline-inverted ">
                                    <div class="timeline-badge danger">
                                        <i class="fa fa-times"></i>
                                    </div>
                                    <div class="timeline-panel" id="drugstore">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Drugstore</h4>
                                            <p><small class="text-muted text-success activityDateTime"></small> </p>
                                            <!-- <span class="activityQrCode"></span> -->
                                        </div>
                                        <div class="timeline-body">
                                            <table class="table activityData table-responsive">
                                                <tr>
                                                    <td colspan="2"><p>Information Not Avilable</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.row -->
</div>
<input type="hidden" id="batchNo" value="<?php $batchNo = isset($_GET['batchNo'])?$_GET['batchNo']:''; echo $batchNo;?>">

<?php include('templates/_footer.php');?>   