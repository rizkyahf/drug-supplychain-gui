var DrugSupplyChainAbi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getDrugStoreData",
		"outputs": [
			{
				"name": "receiveDate",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint32"
			},
			{
				"name": "additionalInfo",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getFactoryInData",
		"outputs": [
			{
				"name": "receiveDate",
				"type": "string"
			},
			{
				"name": "itemName",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			},
			{
				"name": "_receiveDate",
				"type": "string"
			},
			{
				"name": "_itemName",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint32"
			}
		],
		"name": "updateFactoryInData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			},
			{
				"name": "_sendDate",
				"type": "string"
			},
			{
				"name": "_drugName",
				"type": "string"
			},
			{
				"name": "_productionNumber",
				"type": "string"
			},
			{
				"name": "_productionDate",
				"type": "string"
			},
			{
				"name": "_expiredDate",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint32"
			}
		],
		"name": "updateFactorySendData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getNextAction",
		"outputs": [
			{
				"name": "action",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			},
			{
				"name": "_receiveDate",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint32"
			},
			{
				"name": "_additionalInfo",
				"type": "string"
			}
		],
		"name": "updateDrugStoreData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			},
			{
				"name": "_sendDate",
				"type": "string"
			},
			{
				"name": "_factoryName",
				"type": "string"
			},
			{
				"name": "_itemName",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint32"
			}
		],
		"name": "updateSupplierData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			},
			{
				"name": "_receiveDate",
				"type": "string"
			},
			{
				"name": "_drugName",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint32"
			}
		],
		"name": "updateDistributorInData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getDistributorInData",
		"outputs": [
			{
				"name": "receiveDate",
				"type": "string"
			},
			{
				"name": "drugName",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getDistributorSendData",
		"outputs": [
			{
				"name": "sendDate",
				"type": "string"
			},
			{
				"name": "drugStoreName",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			},
			{
				"name": "_sendDate",
				"type": "string"
			},
			{
				"name": "_drugStoreName",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint32"
			}
		],
		"name": "updateDistributorSendData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_registrationNo",
				"type": "string"
			},
			{
				"name": "_drugName",
				"type": "string"
			}
		],
		"name": "addBasicDetails",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getSupplierData",
		"outputs": [
			{
				"name": "sendDate",
				"type": "string"
			},
			{
				"name": "factoryName",
				"type": "string"
			},
			{
				"name": "itemName",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getFactorySendData",
		"outputs": [
			{
				"name": "sendDate",
				"type": "string"
			},
			{
				"name": "drugName",
				"type": "string"
			},
			{
				"name": "productionNumber",
				"type": "string"
			},
			{
				"name": "productionDate",
				"type": "string"
			},
			{
				"name": "expiredDate",
				"type": "string"
			},
			{
				"name": "quantity",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "address"
			}
		],
		"name": "getBasicDetails",
		"outputs": [
			{
				"name": "registrationNo",
				"type": "string"
			},
			{
				"name": "drugName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_supplyChainAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "InitialBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "DoneSupplier",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "DoneFactoryIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "DoneFactorySend",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "DoneDistributorIn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "DoneDistributorSend",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "batchNo",
				"type": "address"
			}
		],
		"name": "DoneDrugStore",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]