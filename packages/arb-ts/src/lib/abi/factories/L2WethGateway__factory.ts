/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2WethGateway } from '../L2WethGateway'

export class L2WethGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2WethGateway> {
    return super.deploy(overrides || {}) as Promise<L2WethGateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2WethGateway {
    return super.attach(address) as L2WethGateway
  }
  connect(signer: Signer): L2WethGateway__factory {
    return super.connect(signer) as L2WethGateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2WethGateway {
    return new Contract(address, _abi, signerOrProvider) as L2WethGateway
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
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
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
    name: 'l2Weth',
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
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611a08806100206000396000f3fe6080604052600436106100ab5760003560e01c8063a0c76a9611610064578063a0c76a96146102d2578063a7e28d48146103ab578063d2ce7d65146103de578063db70cf6e14610478578063f887ea4014610551578063f8c8765e14610566576100b2565b8063015234ab146100b7578063146bf4b1146100de578063247b27681461010f5780632db09c1c146101245780632e567b36146101395780637b3a3c8b14610244576100b2565b366100b257005b600080fd5b3480156100c357600080fd5b506100cc6105b1565b60408051918252519081900360200190f35b3480156100ea57600080fd5b506100f36105b7565b604080516001600160a01b039092168252519081900360200190f35b34801561011b57600080fd5b506100f36105c6565b34801561013057600080fd5b506100f36105d5565b6101cf600480360360a081101561014f57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561019157600080fd5b8201836020820111156101a357600080fd5b803590602001918460018302840111600160201b831117156101c457600080fd5b5090925090506105e4565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102095781810151838201526020016101f1565b50505050905090810190601f1680156102365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101cf6004803603608081101561025a57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561029457600080fd5b8201836020820111156102a657600080fd5b803590602001918460018302840111600160201b831117156102c757600080fd5b509092509050610a78565b3480156102de57600080fd5b506101cf600480360360a08110156102f557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561033757600080fd5b82018360208201111561034957600080fd5b803590602001918460018302840111600160201b8311171561036a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a8a945050505050565b3480156103b757600080fd5b506100f3600480360360208110156103ce57600080fd5b50356001600160a01b0316610c01565b6101cf600480360360c08110156103f457600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561043a57600080fd5b82018360208201111561044c57600080fd5b803590602001918460018302840111600160201b8311171561046d57600080fd5b509092509050610c12565b34801561048457600080fd5b5061054f600480360360a081101561049b57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b8111156104db57600080fd5b8201836020820111156104ed57600080fd5b803590602001918460018302840111600160201b8311171561050e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e25945050505050565b005b34801561055d57600080fd5b506100f361101f565b34801561057257600080fd5b5061054f6004803603608081101561058957600080fd5b506001600160a01b03813581169160208101358216916040820135811691606001351661102e565b60025481565b6003546001600160a01b031681565b6004546001600160a01b031681565b6000546001600160a01b031681565b60606105ee611100565b61063a576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060808484604081101561064d57600080fd5b810190602081018135600160201b81111561066757600080fd5b82018360208201111561067957600080fd5b803590602001918460018302840111600160201b8311171561069a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156106ec57600080fd5b8201836020820111156106fe57600080fd5b803590602001918460018302840111600160201b8311171561071f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525097995092975061076995508f94506111119350505050565b905061077d816001600160a01b0316611176565b6107b65760006107918b838c8c8c8961117c565b905080156107b45760405180602001604052806000815250945050505050610a6e565b505b8151156109ad576000306001600160a01b031663db70cf6e838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561086d578181015183820152602001610855565b50505050905090810190601f16801561089a5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b1580156108bd57600080fd5b505af19250505080156108ce575060015b6108e2576108dd828b8a6111a9565b6108e6565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561096b578181015183820152602001610953565b50505050905090810190601f1680156109985780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a3506109b8565b6109b88189896111a9565b806001600160a01b0316886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040518060200160405280600081525093505050505b9695505050505050565b6060610a6e8686866000808888610c12565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ae2578181015183820152602001610aca565b50505050905090810190601f168015610b0f5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b83811015610b8e578181015183820152602001610b76565b50505050905090810190601f168015610bbb5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6000610c0c82611111565b92915050565b60603415610c52576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610c9585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061121892505050565b91509150600080610ca58c611111565b9050610cb9816001600160a01b0316611176565b610cff576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b610d0a81858c61130a565b610d178c858d8d87611388565b915050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dc0578181015183820152602001610da8565b50505050905090810190601f168015610ded5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b333014610e79576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610e8b826001600160a01b0316611176565b610edc576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610ee78583866111a9565b6000610ef16113a1565b5a039050805a11610f335760405162461bcd60e51b815260040180806020018281038252602b81526020018061197e602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fb0578181015183820152602001610f98565b50505050905090810190601f168015610fdd5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610ffe57600080fd5b5087f1158015611012573d6000803e3d6000fd5b5050505050505050505050565b6001546001600160a01b031681565b61103884846113a7565b6001600160a01b038216611084576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b0381166110d0576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600380546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790555050565b6000546001600160a01b0316331490565b6003546000906001600160a01b03838116911614611165576040805162461bcd60e51b815260206004820152600c60248201526b0aea49e9c8ebe9862ae8aa8960a31b604482015290519081900360640190fd5b50506004546001600160a01b031690565b3b151590565b60006001905061119e8730878660405180602001604052806000815250611388565b509695505050505050565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156111e457600080fd5b505af11580156111f8573d6000803e3d6000fd5b50611213935050506001600160a01b038516905083836113b5565b505050565b60006060611224611407565b156112ff5782806020019051604081101561123e57600080fd5b815160208301805160405192949293830192919084600160201b82111561126457600080fd5b90830190602082018581111561127957600080fd5b8251600160201b81118282018810171561129257600080fd5b82525081516020918201929091019080838360005b838110156112bf5781810151838201526020016112a7565b50505050905090810190601f1680156112ec5780820380516001836020036101000a031916815260200191505b5060405250929450909250611305915050565b50339050815b915091565b6113256001600160a01b03841683308463ffffffff61141816565b826001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561136b57600080fd5b505af115801561137f573d6000803e3d6000fd5b50505050505050565b6000610a6e858461139c8989898989610a8a565b611478565b61138890565b6113b1828261149d565b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611213908490611569565b6001546001600160a01b0316331490565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611472908590611569565b50505050565b6000805461149390849086906001600160a01b03168561161a565b90505b9392505050565b6001600160a01b0382166114ee576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b03161561153b576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b60606115be826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117b39092919063ffffffff16565b805190915015611213578080602001905160208110156115dd57600080fd5b50516112135760405162461bcd60e51b815260040180806020018281038252602a8152602001806119a9602a913960400191505060405180910390fd5b604080516349460b4d60e11b81526001600160a01b0384166004820190815260248201928352835160448301528351600093849360649363928c169a938b938a938a93929088019060208501908083838d5b8381101561168457818101518382015260200161166c565b50505050905090810190601f1680156116b15780820380516001836020036101000a031916815260200191505b5093505050506020604051808303818588803b1580156116d057600080fd5b505af11580156116e4573d6000803e3d6000fd5b50505050506040513d60208110156116fb57600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808a1694908b16937f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a68938a93919283929083019185019080838360005b83811015611770578181015183820152602001611758565b50505050905090810190601f16801561179d5780820380516001836020036101000a031916815260200191505b509250505060405180910390a495945050505050565b60606114938484600085856117c785611176565b611818576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106118575780518252601f199092019160209182019101611838565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146118b9576040519150601f19603f3d011682016040523d82523d6000602084013e6118be565b606091505b50915091506118ce8282866118d9565b979650505050505050565b606083156118e8575081611496565b8251156118f85782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561194257818101518382015260200161192a565b50505050905090810190601f16801561196f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212203665b7927d4c98deba71b97cc459a937575695d4128ef0bd85a465d999739a9c64736f6c634300060b0033'