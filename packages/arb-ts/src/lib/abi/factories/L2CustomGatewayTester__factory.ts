/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2CustomGatewayTester } from '../L2CustomGatewayTester'

export class L2CustomGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2CustomGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L2CustomGatewayTester>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGatewayTester {
    return super.attach(address) as L2CustomGatewayTester
  }
  connect(signer: Signer): L2CustomGatewayTester__factory {
    return super.connect(signer) as L2CustomGatewayTester__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGatewayTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L2CustomGatewayTester
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_dest',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'mintAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'registerTokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506115c9806100206000396000f3fe6080604052600436106100a75760003560e01c80638a2dc014116100645780638a2dc01414610315578063a0c76a9614610348578063a7e28d4814610421578063d2ce7d6514610454578063db70cf6e146104ee578063f887ea40146105c5576100a7565b8063015234ab146100ac5780630e8dde73146100d35780632db09c1c146101105780632e567b3614610141578063485cc9551461024c5780637b3a3c8b14610287575b600080fd5b3480156100b857600080fd5b506100c16105da565b60408051918252519081900360200190f35b3480156100df57600080fd5b5061010e600480360360408110156100f657600080fd5b506001600160a01b03813581169160200135166105e0565b005b34801561011c57600080fd5b50610125610662565b604080516001600160a01b039092168252519081900360200190f35b6101d7600480360360a081101561015757600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561019957600080fd5b8201836020820111156101ab57600080fd5b803590602001918460018302840111600160201b831117156101cc57600080fd5b509092509050610671565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102115781810151838201526020016101f9565b50505050905090810190601f16801561023e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561025857600080fd5b5061010e6004803603604081101561026f57600080fd5b506001600160a01b0381358116916020013516610b05565b6101d76004803603608081101561029d57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156102d757600080fd5b8201836020820111156102e957600080fd5b803590602001918460018302840111600160201b8311171561030a57600080fd5b509092509050610b13565b34801561032157600080fd5b506101256004803603602081101561033857600080fd5b50356001600160a01b0316610b25565b34801561035457600080fd5b506101d7600480360360a081101561036b57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156103ad57600080fd5b8201836020820111156103bf57600080fd5b803590602001918460018302840111600160201b831117156103e057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b40945050505050565b34801561042d57600080fd5b506101256004803603602081101561044457600080fd5b50356001600160a01b0316610cb7565b6101d7600480360360c081101561046a57600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156104b057600080fd5b8201836020820111156104c257600080fd5b803590602001918460018302840111600160201b831117156104e357600080fd5b509092509050610d0f565b3480156104fa57600080fd5b5061010e600480360360a081101561051157600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561055157600080fd5b82018360208201111561056357600080fd5b803590602001918460018302840111600160201b8311171561058457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f22945050505050565b3480156105d157600080fd5b5061012561111c565b60025481565b6105e861112b565b610634576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6001600160a01b03918216600090815260036020526040902080546001600160a01b03191691909216179055565b6000546001600160a01b031681565b606061067b61112b565b6106c7576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b606080848460408110156106da57600080fd5b810190602081018135600160201b8111156106f457600080fd5b82018360208201111561070657600080fd5b803590602001918460018302840111600160201b8311171561072757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561077957600080fd5b82018360208201111561078b57600080fd5b803590602001918460018302840111600160201b831117156107ac57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509799509297506107f695508f945061113c9350505050565b905061080a816001600160a01b031661115a565b61084357600061081e8b838c8c8c89611160565b905080156108415760405180602001604052806000815250945050505050610afb565b505b815115610a3a576000306001600160a01b031663db70cf6e838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108fa5781810151838201526020016108e2565b50505050905090810190601f1680156109275780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561094a57600080fd5b505af192505050801561095b575060015b61096f5761096a828b8a61118d565b610973565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109f85781810151838201526020016109e0565b50505050905090810190601f168015610a255780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610a45565b610a4581898961118d565b806001600160a01b0316886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040518060200160405280600081525093505050505b9695505050505050565b610b0f828261120a565b5050565b6060610afb8686866000808888610d0f565b6003602052600090815260409020546001600160a01b031681565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b98578181015183820152602001610b80565b50505050905090810190601f168015610bc55780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b83811015610c44578181015183820152602001610c2c565b50505050905090810190601f168015610c715780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6000610cc1611214565b610d00576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b610d098261113c565b92915050565b60603415610d4f576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610d9285858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061122592505050565b91509150600080610da28c61113c565b9050610db6816001600160a01b031661115a565b610dfc576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b610e0781858c611317565b610e148c858d8d87611377565b915050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ebd578181015183820152602001610ea5565b50505050905090810190601f168015610eea5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b333014610f76576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610f88826001600160a01b031661115a565b610fd9576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610fe485838661118d565b6000610fee611391565b5a039050805a116110305760405162461bcd60e51b815260040180806020018281038252602b815260200180611569602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110ad578181015183820152602001611095565b50505050905090810190601f1680156110da5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b1580156110fb57600080fd5b5087f115801561110f573d6000803e3d6000fd5b5050505050505050505050565b6001546001600160a01b031681565b6000546001600160a01b0316331490565b6001600160a01b039081166000908152600360205260409020541690565b3b151590565b6000600190506111828730878660405180602001604052806000815250611377565b509695505050505050565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156111ed57600080fd5b505af1158015611201573d6000803e3d6000fd5b50505050505050565b610b0f8282611397565b6001546001600160a01b0316331490565b60006060611231611214565b1561130c5782806020019051604081101561124b57600080fd5b815160208301805160405192949293830192919084600160201b82111561127157600080fd5b90830190602082018581111561128657600080fd5b8251600160201b81118282018810171561129f57600080fd5b82525081516020918201929091019080838360005b838110156112cc5781810151838201526020016112b4565b50505050905090810190601f1680156112f95780820380516001836020036101000a031916815260200191505b5060405250929450909250611312915050565b50339050815b915091565b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156111ed57600080fd5b6000610afb85600061138c8989898989610b40565b611463565b61c35090565b6001600160a01b0382166113e8576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611435576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b60008054604051835183926060926001600160a01b039091169187918791819060208401908083835b602083106114ab5780518252601f19909201916020918201910161148c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461150d576040519150601f19603f3d011682016040523d82523d6000602084013e611512565b606091505b50915091508161155b576040805162461bcd60e51b815260206004820152600f60248201526e13d5551093d5539117d49155915495608a1b604482015290519081900360640190fd5b506105399594505050505056fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a2646970667358221220417ed535894e11cbc70fbce61a56965a88290763384957e3b448e7729583f8fa64736f6c634300060b0033'