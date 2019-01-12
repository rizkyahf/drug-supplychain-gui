// ini ori
var globCurrentEditingBatchNo = false;
var globCurrentUser = false;

var userForm,
    supplierForm,
    factoryInForm,
    factorySendForm,
    distributorInForm,
    distributorSendForm,
    drugstoreForm;

$(document).ready(function(){
    console.log("1 " + globCoinbase);
  
    userForm =  $("#updateUserForm").parsley();
	/* Form Input in User Page */
    supplierForm        	= $("#supplierForm").parsley();
    factoryInForm       	= $("#factoryInForm").parsley();
    factorySendForm			= $("#factorySendForm").parsley();
    distributorInForm      	= $("#distributorInForm").parsley();
    distributorSendForm    	= $("#distributorSendForm").parsley();
    drugstoreForm			= $("#drugstoreForm").parsley();

    $('.datepicker-autoclose').datepicker({
        autoclose: true,
        todayHighlight: true,
        format:"dd-mm-yyyy"
    });
});

$(window).on("coinbaseReady", function ()
{
    const myCb = globCoinbase;
    console.log("myCb " + myCb);
    console.log("gCb " + globCoinbase);
    $("#currentUserAddress").html(myCb);

    getUser(globUserContract, function(data){      

      globCurrentUser = data ;

      if(data.isActive == true){
        if(data.name.trim().length <=0 && 
           data.contactNo.trim().length <=0 && 
           data.role.trim().length <=0 )
        {
          swal("Oops","Your Account was not found , Please contact Admin ","error");
          setTimeout(function()
          {
            window.location = "index.php";
          },1000);
          return ;
        }
      }else{
          swal({
              title: "Insufficient Access",
              text: "Your Account is blocked by Admin , Please contact to Admin",
              type: "error",
              showCancelButton: false,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Ok",
              closeOnConfirm: false
            },
            function(isConfirm)
            {
              if(isConfirm==true)
              {
                console.log(globCurrentUser);
                console.log(data);
               window.location = "index.php";
              }
            });
          return ;
      }  

    //   $("#userImage").attr('src','https://ipfs.io/ipfs/'+data.profileHash);
      $("#userName").html(data.name);
      $("#userContact").html(data.contactNo);
      $("#userRole").html(data.role);
      
    });

    getBatchEvents(globMainContract);
});

/* --------------- User Section -----------------------*/
$("#editUser").on('click',function(){
  startLoader();
  getUser(globUserContract, function(data){
       
       $("#fullname").val(data.name);
       $("#contactNumber").val(data.contactNo);
       $("#role").val(data.role);

       var profileImageLink = 'https://ipfs.io/ipfs/'+data.profileHash;
       var btnViewImage = '<a href="'+profileImageLink+'" target="_blank" class=" text-danger"><i class="fa fa-eye"></i> View Image</a>';
       $("#imageHash").html(btnViewImage);

       changeSwitchery($("#isActive"),data.isActive);
       switchery.disable();
       stopLoader();
       $("#userFormModel").modal();
    });
});

$("#userFormBtn").on('click',function(){

    if(userForm.validate())
    {
      var fullname      = $("#fullname").val();
      var contactNumber = $("#contactNumber").val();
      var role          = globCurrentUser.role;
      var userStatus    = $("#isActive").is(":checked");
      var profileHash   = $("#userProfileHash").val();

      var userDetails = {
          fullname : fullname,
          contact : contactNumber,
          role : role,
          status : userStatus,
          profile : profileHash
      };    

      updateUser(globUserContract, userDetails); 
    }
});

function getUser(contractRef,callback)
{
   contractRef.methods.getUser(globCoinbase).call(function (error, result) {
        if(error){
            alert("Unable to get User" + error);    
        }
        newUser = result;
        if (callback)
        {
            callback(newUser);
        }        
    });
}

function updateUser(contractRef,data)
{
  contractRef.methods.updateUser(data.fullname,data.contact,data.role,data.status,data.profile)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
          $("#userFormModel").modal('hide');
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "User Profile Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage);
            $("#userFormModel").modal('hide');
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------- Activity Section -----------------------*/

function editActivity(batchNo)
{
  startLoader();
  globCurrentEditingBatchNo = batchNo;
}

/* --------------------- Supplier Section --------------------- */
$("#updateSupplier").on('click',function(){

    if(supplierForm.validate())
    {
		var tmpDate = $("#supplierSendDate").val().trim().split("-");
		tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     
  
      	var data = {
        batchNo         : globCurrentEditingBatchNo,
        sendDate		: tmpDate,
        factoryName		: $("#supplierFactoryName").val().trim(),
		itemName	 	: $("#supplierItemName").val().trim(),
		quantity		: parseInt($("#supplierQuantity").val().trim()),
      };    

      updateSupplier(globMainContract, data); 
    }
});

function updateSupplier(contractRef,data)
{
  contractRef.methods.updateSupplierData(data.batchNo, data.sendDate,data.factoryName, data.itemName, data.quantity)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Supplier Data Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------------- Factory In Section --------------------- */
$("#updateFactoryIn").on('click',function(){

    if(factoryInForm.validate())
    {
		var tmpDate = $("#factoryInReceiveDate").val().trim().split("-");
		tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     
  
      	var data = {
        batchNo         : globCurrentEditingBatchNo,
        receiveDate		: tmpDate,
		itemName	 	: $("#factoryInItemName").val().trim(),
		quantity		: parseInt($("#factoryInQuantity").val().trim()),
      };    

      updateFactoryIn(globMainContract, data); 
    }
});

function updateFactoryIn(contractRef,data)
{
  contractRef.methods.updateFactoryInData(data.batchNo, data.receiveDate, data.itemName, data.quantity)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Factory In Data Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------------- Factory Send Section --------------------- */
$("#updateFactorySend").on('click',function(){

    if(factorySendForm.validate())
    {
		var tmpDate = $("#factorySendSendDate").val().trim().split("-");
		tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     
  
      	var data = {
		batchNo         	: globCurrentEditingBatchNo,
		sendDate			: tmpDate,
		drugName			: $("#factorySendDrugName").val().trim(),
		productionNumber	: $("#factorySendProductionNumber").val().trim(),
		productionDate		: $("#factorySendProductionDate").val().trim(),
		expiredDate			: $("#factorySendExpiredDate").val().trim(),
		quantity			: parseInt($("#factorySendQuantity").val().trim()),
    	};    

      updateFactorySend(globMainContract, data); 
    }
});

function updateFactorySend(contractRef,data)
{
  contractRef.methods.updateFactorySendData(data.batchNo, data.sendDate, data.drugName, data.productionNumber, data.productionDate, data.expiredDate, data.quantity)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Factory Send Data Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------------- Distributor In Section --------------------- */
$("#updateDistributorIn").on('click',function(){

    if(distributorInForm.validate())
    {
		var tmpDate = $("#distributorInReceiveDate").val().trim().split("-");
		tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     
  
      	var data = {
		batchNo         	: globCurrentEditingBatchNo,
		receiveDate			: tmpDate,
		drugName			: $("#distributorInDrugName").val().trim(),
		quantity			: parseInt($("#distributorInQuantity").val().trim()),
    	};    

      updateDistributorIn(globMainContract, data); 
    }
});

function updateDistributorIn(contractRef,data)
{
  contractRef.methods.updateDistributorInData(data.batchNo, data.receiveDate, data.drugName, data.quantity)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Distributor In Data Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------------- Distributor Send Section --------------------- */
$("#updateDistributorSend").on('click',function(){
    console.log(1);

    if(distributorSendForm.validate())
    {
        console.log(2);
		var tmpDate = $("#distributorSendSendDate").val().trim().split("-");
        console.log(3);
		tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     
        console.log(4);
  
      	var data = {
		batchNo         	: globCurrentEditingBatchNo,
		sendDate			: tmpDate,
		drugStoreName		: $("#distributorSendDrugStoreName").val().trim(),
		quantity			: parseInt($("#distributorInQuantity").val().trim()),
    	};    

      updateDistributorSend(globMainContract, data); 
    }
});

function updateDistributorSend(contractRef,data)
{
    console.log(30);
  contractRef.methods.updateDistributorSendData(data.batchNo, data.sendDate, data.drugStoreName, data.quantity)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Distributor Send Data Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* --------------------- Drugstore Section --------------------- */
$("#updateDrugstore").on('click',function(){

    if(drugstoreForm.validate())
    {
		var tmpDate = $("#drugstoreReceiveDate").val().trim().split("-");
		tmpDate = tmpDate[1]+"/"+tmpDate[0]+"/"+tmpDate[2];     
  
      	var data = {
		batchNo         	: globCurrentEditingBatchNo,
		receiveDate			: tmpDate,
		quantity			: parseInt($("#drugstoreQuantity").val().trim()),
		additionalInfo		: $("#drugstoreAdditionalInfo").val().trim(),
    	};    

      updateDrugstore(globMainContract, data); 
    }
});

function updateDrugstore(contractRef,data)
{
    // console.log(3);/
  contractRef.methods.updateDrugStoreData(data.batchNo, data.receiveDate, data.quantity, data.additionalInfo)
  .send({from:globCoinbase,to:contractRef.address})
  .on('transactionHash',function(hash)
        {
          $.magnificPopup.instance.close()
          handleTransactionResponse(hash);
        })
        .on('receipt',function(receipt)
        {
            receiptMessage = "Drugstore Data Updated Succussfully";
            handleTransactionReceipt(receipt,receiptMessage)
        })
        .on('error',function(error)
        {
            handleGenericError(error.message);
            return;     
        });    
}

/* ---------------------  --------------------- */

function getBatchEvents(contractRef) {
    contractRef.getPastEvents('InitialBatch', {
        fromBlock: 0
    }).then(function (events) 
    {
    //   $("#totalBatch").html(events.length);
    //   counterInit();

        var finalEvents = [];
        $.each(events,function(index,elem)
        {
            var tmpData = {};
            tmpData.batchNo = elem.returnValues.batchNo;
            tmpData.transactionHash = elem.transactionHash;
            getBatchStatus(contractRef, tmpData.batchNo).then(result => {
                tmpData.status = result;

                finalEvents.push(tmpData);
            });
        });
        
        setTimeout(function()
        {
          if(finalEvents.length > 0){
              var table = buildBatchTable(finalEvents);
              $("#userBatchTable").find("tbody").html(table);

              reInitPopupForm();
          }    
        },1000); 

        

        // $("#transactions tbody").html(buildTransactionData(events));
    }).catch(error => {
        console.log(error)
    });
}

function buildBatchTable(finalEvents)
{
    $.magnificPopup.instance.popupsCache = {};

    var table = "";
    
    for (var tmpDataIndex in finalEvents)
    {   
        var elem = finalEvents[tmpDataIndex];
        var batchNo = elem.batchNo;
        var transactionHash = elem.transactionHash;
        var tr = "";
        
        if (elem.status == "SUPPLIER") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>';
                    if(globCurrentUser.role == "SUPPLIER"){
                        tr+=`<td>
                                <span class="label label-inverse font-weight-100">
                                <a class="popup-with-form" href="#supplierForm" onclick="editActivity('`+batchNo+`')">
                                    <span class="label label-inverse font-weight-100">Update</span>
                                </a>
                            </td>`;
                    }
                    else{
                        tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                    }
            tr+=    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "FACTORY_IN") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
					'<td><span class="label label-success font-weight-100">Completed</span> </td>';
					if(globCurrentUser.role == "FACTORY"){
                        tr+=`<td>
                                <span class="label label-inverse font-weight-100">
                                <a class="popup-with-form" href="#factoryInForm" onclick="editActivity('`+batchNo+`')">
                                    <span class="label label-inverse font-weight-100">Update</span>
                                </a>
                            </td>`;
                    }
                    else{
                        tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                    }
			tr+=	'<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "FACTORY_SEND") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>';
					if(globCurrentUser.role == "FACTORY"){
                        tr+=`<td>
                                <span class="label label-inverse font-weight-100">
                                <a class="popup-with-form" href="#factorySendForm" onclick="editActivity('`+batchNo+`')">
                                    <span class="label label-inverse font-weight-100">Update</span>
                                </a>
                            </td>`;
                    }
                    else{
                        tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                    }
            tr+=    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "DISTRIBUTOR_IN") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>';
					if(globCurrentUser.role == "DISTRIBUTOR"){
                        tr+=`<td>
                                <span class="label label-inverse font-weight-100">
                                <a class="popup-with-form" href="#distributorInForm" onclick="editActivity('`+batchNo+`')">
                                    <span class="label label-inverse font-weight-100">Update</span>
                                </a>
                            </td>`;
                    }
                    else{
                        tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                    }
            tr+=    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "DISTRIBUTOR_SEND") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>';
					if(globCurrentUser.role == "DISTRIBUTOR"){
                        tr+=`<td>
                                <span class="label label-inverse font-weight-100">
                                <a class="popup-with-form" href="#distributorSendForm" onclick="editActivity('`+batchNo+`')">
                                    <span class="label label-inverse font-weight-100">Update</span>
                                </a>
                            </td>`;
                    }
                    else{
                        tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                    }
            tr+=    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "DRUGSTORE") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>';
					if(globCurrentUser.role == "DRUGSTORE"){
                        tr+=`<td>
                                <span class="label label-inverse font-weight-100">
                                <a class="popup-with-form" href="#drugstoreForm" onclick="editActivity('`+batchNo+`')">
                                    <span class="label label-inverse font-weight-100">Update</span>
                                </a>
                            </td>`;
                    }
                    else{
                        tr+=`<td><span class="label label-warning font-weight-100">Processing</span> </td>`;
                    }
            tr+=    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "DONE") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } else if (elem.status == "UNAVAILABLE") {
            tr = '<tr>'+
					'<td>'+batchNo+'</td>'+
                    '<td colspan="6"><span class="label label-primary font-weight-100" style="display:block;">Unavailable</span> </td>'+
                    '<td><a href="view-batch.php?batchNo='+batchNo+'&txn='+transactionHash+'" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i> view</a> </td>'+
                 '</tr>';
        } 
            
        table+=tr;
    }

    return table;
}

function getBatchStatus(contractRef, batchNo)
{
    return contractRef.methods.getNextAction(batchNo)
        .call();
}

function reInitPopupForm()
{
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: true,
    key: 'popup-with-form',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      open: function() {
        stopLoader();
      }
    }
  });
}