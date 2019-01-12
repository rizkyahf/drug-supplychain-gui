
$(window).on('coinbaseReady',function(){
	getUserEvents(globUserContract);
	getBatchEvents(globMainContract);
});

function userFormSubmit(){

	// if($("form#userForm").parsley().isValid()){

		var userWalletAddress = $("#userWalletAddress").val();
		var userName          = $("#userName").val();
		var userContactNo     = $("#userContactNo").val();
		var userRoles         = $("#userRoles").val();
		// var isActive          = $("#isActive").val();
		var isActive          = $("#isActive").is(":checked");
        var tr = true;
        
		globUserContract.methods.updateUserForAdmin(userWalletAddress,userName,userContactNo,userRoles,isActive,"n/a")
		.send({from:globCoinbase, to:globUserContract._address})
		.on('transactionHash',function(hash){
			 handleTransactionResponse(hash);
			 $("#userFormModel").modal('hide');
		})
		.on('receipt', function(receipt){
			receiptMessage = "User Created Successfully";
      		handleTransactionReceipt(receipt,receiptMessage);
      		$("#userFormModel").modal('hide');
      		getUserEvents(globUserContract);
		})
		.on('error',function(error)
		{
		    handleGenericError(error.message);
		    return;   
		});
	// }
}

function addBatch()
{

    // if (batchFormInstance.validate())
    // {
		var registrationNo = $("#registrationNo").val();
		var drugName = $("#drugName").val();

		globMainContract.methods.addBasicDetails(registrationNo, drugName)
        .send({
            from: globCoinbase,
            to: globMainContract._address
        })
        .on('transactionHash', function (hash) {
            handleTransactionResponse(hash);
            $("#batchFormModel").modal('hide');
        })
        .on('receipt', function (receipt) {
            receiptMessage = "Token Transferred Successfully";
            handleTransactionReceipt(receipt, receiptMessage);
            $("#batchFormModel").modal('hide');
            getBatchEvents(globMainContract);
        })
        .on('error', function (error) {
            handleGenericError(error.message);
            return;
        });
    // }
}

// ini ada yang error
function getBatchEvents(contractRef) {
    contractRef.getPastEvents('InitialBatch', {
        fromBlock: 0
    }).then(function (events) 
    {
    	$("#totalBatch").html(events.length);
        
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
	            $("#adminBatchTable").find("tbody").html(table);
	            $('.qr-code-magnify').magnificPopup({
				    type:'image',
				    mainClass: 'mfp-zoom-in'
				});
	        }    

            counterInit();
        },1000); 

    }).catch(error => {
        console.log(error)
    });
}

/* --------------------- Pull Drug Section --------------------- */
$(".btnPullDrug").on('click',function(){
    // var data = {
    //     batchNo     : $("#btnPullDrug").data("key"),
    // };
    // updatePullDrug
    console.log(data.batchNo);
    window.alert("apa");
});

function updatePullDrug(contractRef, data){

}
/* --------------------- ----------------- --------------------- */

function buildBatchTable(finalEvents)
{
    var table = "";
    
    for (var tmpDataIndex in finalEvents)
    {   
        var elem = finalEvents[tmpDataIndex];

        var batchNo = elem.batchNo;
        var transactionHash = elem.transactionHash;
        var tr = "";
        var url = 'https://rinkeby.etherscan.io/tx/'+transactionHash;
        var qrCode = 'https://chart.googleapis.com/chart?cht=qr&chld=H|1&chs=400x400&chl='+url;
			
        var commBatchTd = batchNo;
        var commQrTd = `<a href="`+qrCode+`" title="`+transactionHash+`" class="qr-code-magnify" data-effect="mfp-zoom-in">
				        	<img src="`+qrCode+`" class="img-responsive" style="width:30px; height:30px;">
				        </a>`;
        // var commActionTd = `
        //                     <button id="btnPullDrug" style="color:white;" class="btnPullDrug label label-inverse" data-key="`+batchNo+`" data-toggle="tooltip" title="View">
        //                         Pull Drug
        //                     </button> &nbsp;&nbsp;`;
        var commActionTd =  `<a href="view-batch.php?batchNo=`+batchNo+`&txn=`+transactionHash+`" target="_blank" class="text-inverse p-r-10" data-toggle="tooltip" title="View">
                                <i class="ti-eye"></i> view
                            </a>
                            `;		    
		
		if (elem.status == "SUPPLIER") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
					'<td><span class="label label-warning font-weight-100">Processing</span></td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "FACTORY_IN") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
					'<td><span class="label label-warning font-weight-100">Processing</span></td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "FACTORY_SEND") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
					'<td><span class="label label-warning font-weight-100">Processing</span></td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "SUPPLIER_IN") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
					'<td><span class="label label-warning font-weight-100">Processing</span></td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "SUPPLIER_SEND") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
					'<td><span class="label label-warning font-weight-100">Processing</span></td>'+
                    '<td><span class="label label-danger font-weight-100">Not Available</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "DRUGSTORE") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
					'<td><span class="label label-warning font-weight-100">Processing</span></td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "DONE") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td><span class="label label-success font-weight-100">Completed</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
                 '</tr>';
        } else if (elem.status == "UNAVAILABLE") {
            tr = '<tr>'+
					'<td>'+commBatchTd+'</td>'+
					'<td>'+commQrTd+'</td>'+
                    '<td colspan="6"><span class="label label-primary font-weight-100" style="display:block;">Unavailable</span> </td>'+
                    '<td>'+commActionTd+'</td>'+
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


