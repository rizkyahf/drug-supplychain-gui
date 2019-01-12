var batchNo;
window.addEventListener('load', function() 
{	
  batchNo = $("#batchNo").val();

  // harusnya && tapi dipikirkan lagi
	if(batchNo!="" || batchNo!=null || batchNo!=undefined){

    getBatchData(globMainContract, batchNo, function(result){
      var parentSection = $("#adminSection");
      var activityName = "InitialBatch";
      var built = buildBasicBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });
    
    getSupplierData(globMainContract, batchNo, function(result){
      var parentSection = $("#supplierSection");
      var activityName = "DoneSupplier";
      var built = buildSupplierBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });

    getFactoryInData(globMainContract, batchNo, function(result){
      var parentSection = $("#factoryReceiveSection");
      var activityName = "DoneFactoryIn";
      var built = buildFactoryInBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });

    getFactorySendData(globMainContract, batchNo, function(result){
      var parentSection = $("#factorySend");
      var activityName = "DoneFactorySend";
      var built = buildFactorySendBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });

    getDistributorIn(globMainContract, batchNo, function(result){
      var parentSection = $("#distributorRecieveSection");
      var activityName = "DoneDistributorIn";
      var built = buildDistributorInBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });

    getDistributorSendData(globMainContract, batchNo, function(result){
      var parentSection = $("#distributorSend");
      var activityName = "DoneDistributorSend";
      var built = buildDistributorSendBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });

    getDrugStoreData(globMainContract, batchNo, function(result){
      var parentSection = $("#drugstore");
      var activityName = "DoneDrugStore";
      var built = buildDrugStoreBlock(result);

      populateSection(parentSection, built, activityName, batchNo);
    });

    /* ===================================================================*/
	}

});

function populateSection(parentSection,built,activityName,batchNo)
{
  if(built.isDataAvail==true)
  {
  	getActivityTimestamp(activityName,batchNo, function(resultData)
  	{
     
      console.log(resultData.name + ` ` + activityName +` (`+resultData.user+`)`);
      if(resultData.dataTime)
  		{
        var phoneNoSec = '';
        if(resultData.contactNo!='-'){
          phoneNoSec = `<i class="fa fa-phone"></i> `+resultData.contactNo+`<br/>`;  
        } 

        var userAddress = resultData.user;
        if($(window).width() <= 565){
          userAddress = userAddress.substring(0,15)+'...';
        }

        // var refLink = 'https://rinkeby.etherscan.io/tx/'+resultData.transactionHash;
        var html = `<span class="text-info"><i class='fa fa-user'> </i>
                        `+resultData.name+` (`+userAddress+`) <br/>
                        `+phoneNoSec+`
                    </span>
                    <i class='fa fa-clock-o'> </i> `+resultData.dataTime.toLocaleString()+`</i>`;
        $(parentSection).find(".activityDateTime").html(html);
  			// $(parentSection).find(".timeline-body .activityData").append('<img src="plugins/images/verified.jpg" alt="user-img" style="width:80px;height:80px" class="img-circle pull-right">');
  		}

      // if(resultData.transactionHash){
      //   var url = 'https://rinkeby.etherscan.io/tx/'+resultData.transactionHash;
      //   var qrCode = 'https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=400x400&chl='+url;
      //   var qrCodeSec = `<a href="`+qrCode+`" title="`+resultData.transactionHash+`" class="qr-code-magnify pull-right" data-effect="mfp-zoom-in">
      //                     <img src="`+qrCode+`" class="img-responsive" style="width:70px; height:70px; margin-top:-75px;"/>
      //                   </a>`;

      //   $(parentSection).find(".activityQrCode").html(qrCodeSec);
      // }
  	});

	  var tmpTimelineBadge = $(parentSection).prev(".timeline-badge");

	
		$(tmpTimelineBadge).removeClass("danger").addClass("success");
		$(tmpTimelineBadge).find("i").removeClass().addClass("fa fa-check");
	}


	$(parentSection).find(".activityData").html(built.html); 
}

function getActivityTimestamp(activityName, batchNo, callback)
{
	globMainContract.getPastEvents(activityName,{
		fromBlock:0,
		filter:{batchNo: batchNo}
	},function(error,eventData)
	{
		try
		{
      web3.eth.getBlock(eventData[0].blockNumber,function(error,blockData)
			{
        var resultData = {};
				var date = blockData.timestamp;
				/* Convert Seconds to Miliseconds */
			 	date = new Date(date * 1000);
			 	// $("#cultivationDateTime").html("<i class='fa fa-clock-o'> </i> " + date.toLocaleString());

        resultData.dataTime = date;
        resultData.transactionHash = eventData[0].transactionHash;

        var userAddress = eventData[0].returnValues.user;
        getUserDetails(globUserContract,userAddress,function(result){
            if(userAddress == globAdminAddress){
                resultData.name      = 'Admin';
                resultData.contactNo = '-';
            }else{
                resultData.name      = result.name;
                resultData.contactNo = result.contactNo;
            }  
            
            resultData.user      = userAddress;

            callback(resultData);
        });
			})	
		}
		catch(e)
		{
			callback(false);
		}
	});
}

function buildBasicBlock(result){
  var basicData = {};
  var registrationNo = result.registrationNo;
  var drugName = result.drugName;

  if(registrationNo!='' && drugName!=''){
    basicData.html = `<tr>
                        <td><b>Registration No:</b></td>
                        <td>`+registrationNo+` <i class="fa fa-check-circle verified_info"></i></td>
                      </tr>
                      <tr>
                        <td><b>Drug Name:</b></td>
                        <td>`+drugName+` <i class="fa fa-check-circle verified_info"></i></td>
                      </tr>`;
    basicData.isDataAvail = true;
  }else{
    console.log(" enaam ");
    basicData.html = `<tr>
                                <td colspan="2"><p>Information Not Avilable</p></td>
                        </tr>`;
    basicData.isDataAvail = false;                        
  } 

  return basicData;
}

function buildSupplierBlock(result){
  var supplierData  = {};
  var sendDate      = result.sendDate;
  var factoryName   = result.factoryName;
  var itemName      = result.itemName;
  var quantity      = result.quantity;

  if(sendDate!='' && factoryName!='' && itemName!='' && quantity!=''){
    supplierData.html = `<tr>
                          <td><b>Send Date:</b></td>
                          <td>`+sendDate+` <i class="fa fa-check-circle verified_info"></i></td>
                        </tr>
                        <tr>
                          <td><b>Factory Name:</b></td>
                          <td>`+factoryName+` <i class="fa fa-check-circle verified_info"></i></td>
                        </tr>
                        <tr>
                          <td><b>Item Name:</b></td>
                          <td>`+itemName+` <i class="fa fa-check-circle verified_info"></i></td>
                        </tr>
                        <tr>
                          <td><b>Quantity:</b></td>
                          <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                        </tr>`;
    supplierData.isDataAvail = true; 
  }else{
    supplierData.html = `<tr>
                                <td colspan="2"><p>Information Not Avilable</p></td>
                        </tr>`;
    supplierData.isDataAvail = false;                        
  } 

  return supplierData;
}

function buildFactoryInBlock(result){
  var factoryInData = {};
  var receiveDate   = result.receiveDate;
  var itemName      = result.itemName;
  var quantity      = result.quantity;

  if(receiveDate!='' && itemName!='' && quantity!=''){
    factoryInData.html = `<tr>
                            <td><b>Receive Date:</b></td>
                            <td>`+receiveDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Item Name:</b></td>
                            <td>`+itemName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
    factoryInData.isDataAvail = true;
  }else{
    factoryInData.html = `<tr>
                              <td colspan="2"><p>Information Not Avilable</p></td>
                          </tr>`;
    factoryInData.isDataAvail = false;
  }

  return factoryInData;
}

function buildFactorySendBlock(result){
  var factorySendData    = {};
  var sendDate           = result.sendDate;
  var drugName           = result.drugName;
  var productionNumber   = result.productionNumber;
  var productionDate     = result.productionDate;
  var expiredDate        = result.expiredDate;
  var quantity           = result.quantity;

  if(sendDate!='' && drugName!='' && productionNumber!='' && productionDate != '' && expiredDate != '' && quantity != ''){
    factorySendData.html = `<tr>
                            <td><b>Send Date:</b></td>
                            <td>`+sendDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Drug Name:</b></td>
                            <td>`+drugName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>production number :</b></td>
                            <td>`+productionNumber+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>production date:</b></td>
                            <td>`+productionDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>expired date:</b></td>
                            <td>`+expiredDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
    factorySendData.isDataAvail = true;
  }else{
    factorySendData.html = `<tr>
                              <td colspan="2"><p>Information Not Avilable</p></td>
                          </tr>`;
    factorySendData.isDataAvail = false;
  }

  return factorySendData;
}

function buildDistributorInBlock(result){
  var distributorInnData = {};
  var receiveDate   = result.receiveDate;
  var drugName      = result.drugName;
  var quantity      = result.quantity;

  if(receiveDate!='' && drugName!='' && quantity!=''){
    distributorInnData.html = `<tr>
                            <td><b>Receive Date:</b></td>
                            <td>`+receiveDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Drug Name:</b></td>
                            <td>`+drugName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
    distributorInnData.isDataAvail = true;
  }else{
    distributorInnData.html = `<tr>
                              <td colspan="2"><p>Information Not Avilable</p></td>
                          </tr>`;
    distributorInnData.isDataAvail = false;
  }

  return distributorInnData;
}

function buildDistributorSendBlock(result){
  var distributorSendData = {};
  var sendDate   = result.sendDate;
  var drugStoreName      = result.drugStoreName;
  var quantity      = result.quantity;

  if(sendDate!='' && drugStoreName!='' && quantity!=''){
    distributorSendData.html = `<tr>
                            <td><b>Send Date:</b></td>
                            <td>`+sendDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Drug Store Name:</b></td>
                            <td>`+drugStoreName+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
    distributorSendData.isDataAvail = true;
  }else{
    distributorSendData.html = `<tr>
                              <td colspan="2"><p>Information Not Avilable</p></td>
                          </tr>`;
    distributorSendData.isDataAvail = false;
  }

  return distributorSendData;
}

function buildDrugStoreBlock(result){
  var drugStoreSendData = {};
  var receiveDate   = result.receiveDate;
  var additionalInfo      = result.additionalInfo;
  var quantity      = result.quantity;

  if(receiveDate!='' && additionalInfo!='' && quantity!=''){
    drugStoreSendData.html = `<tr>
                            <td><b>Receive Date:</b></td>
                            <td>`+receiveDate+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Additional Info:</b></td>
                            <td>`+additionalInfo+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>
                          <tr>
                            <td><b>Quantity:</b></td>
                            <td>`+quantity+` <i class="fa fa-check-circle verified_info"></i></td>
                          </tr>`;
    drugStoreSendData.isDataAvail = true;
  }else{
    drugStoreSendData.html = `<tr>
                              <td colspan="2"><p>Information Not Avilable</p></td>
                          </tr>`;
    drugStoreSendData.isDataAvail = false;
  }

  return drugStoreSendData;
}




