var SupplyChainStorageAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "batchNo",
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
		"name": "setDistributorInData",
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
				"name": "batchNo",
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
		"constant": false,
		"inputs": [
			{
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "deAuthorizeCaller",
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
				"name": "batchNo",
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
		"constant": true,
		"inputs": [
			{
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserRole",
		"outputs": [
			{
				"name": "",
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
				"name": "_caller",
				"type": "address"
			}
		],
		"name": "authorizeCaller",
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
		"inputs": [],
		"name": "lastAccess",
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
		"constant": false,
		"inputs": [
			{
				"name": "batchNo",
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
		"name": "setDrugStoreData",
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
				"name": "",
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
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "contactNo",
				"type": "string"
			},
			{
				"name": "role",
				"type": "string"
			},
			{
				"name": "isActive",
				"type": "bool"
			},
			{
				"name": "profileHash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
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
				"name": "batchNo",
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
		"constant": false,
		"inputs": [
			{
				"name": "batchNo",
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
		"name": "setDistributorSendData",
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
				"name": "batchNo",
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
		"name": "setFactoryInData",
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
				"name": "batchNo",
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
				"name": "_registrationNo",
				"type": "string"
			},
			{
				"name": "_drugName",
				"type": "string"
			}
		],
		"name": "setBasicDetails",
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
		"constant": false,
		"inputs": [
			{
				"name": "batchNo",
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
		"name": "setSupplierData",
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
				"name": "batchNo",
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
				"name": "batchNo",
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
		"constant": false,
		"inputs": [
			{
				"name": "batchNo",
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
		"name": "setFactorySendData",
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
		"constant": false,
		"inputs": [
			{
				"name": "_userAddress",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_contactNo",
				"type": "string"
			},
			{
				"name": "_role",
				"type": "string"
			},
			{
				"name": "_isActive",
				"type": "bool"
			},
			{
				"name": "_profileHash",
				"type": "string"
			}
		],
		"name": "setUser",
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "caller",
				"type": "address"
			}
		],
		"name": "AuthorizedCaller",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "caller",
				"type": "address"
			}
		],
		"name": "DeAuthorizedCaller",
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