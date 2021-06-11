/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { AeERC20 } from '../AeERC20'

export class AeERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<AeERC20> {
    return super.deploy(overrides || {}) as Promise<AeERC20>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): AeERC20 {
    return super.attach(address) as AeERC20
  }
  connect(signer: Signer): AeERC20__factory {
    return super.connect(signer) as AeERC20__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AeERC20 {
    return new Contract(address, _abi, signerOrProvider) as AeERC20
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
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
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
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
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506119ad806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e05760003560e01c80634000aea0116100875780634000aea01461037457806370a082311461042d5780637ecebe001461045357806395d89b4114610479578063a457c2d714610481578063a9059cbb146104ad578063d505accf146104d9578063dd62ed3e1461052a576100e0565b806306fdde03146100e5578063095ea7b3146101625780631624f6c6146101a257806318160ddd146102d257806323b872dd146102ec578063313ce567146103225780633644e515146103405780633950935114610348575b600080fd5b6100ed610558565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012757818101518382015260200161010f565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018e6004803603604081101561017857600080fd5b506001600160a01b0381351690602001356105ef565b604080519115158252519081900360200190f35b6102d0600480360360608110156101b857600080fd5b810190602081018135600160201b8111156101d257600080fd5b8201836020820111156101e457600080fd5b803590602001918460018302840111600160201b8311171561020557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561025757600080fd5b82018360208201111561026957600080fd5b803590602001918460018302840111600160201b8311171561028a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff16915061060c9050565b005b6102da6106cd565b60408051918252519081900360200190f35b61018e6004803603606081101561030257600080fd5b506001600160a01b038135811691602081013590911690604001356106d3565b61032a610760565b6040805160ff9092168252519081900360200190f35b6102da610769565b61018e6004803603604081101561035e57600080fd5b506001600160a01b038135169060200135610778565b61018e6004803603606081101561038a57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156103b957600080fd5b8201836020820111156103cb57600080fd5b803590602001918460018302840111600160201b831117156103ec57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506107cc945050505050565b6102da6004803603602081101561044357600080fd5b50356001600160a01b03166108a7565b6102da6004803603602081101561046957600080fd5b50356001600160a01b03166108c2565b6100ed6108e9565b61018e6004803603604081101561049757600080fd5b506001600160a01b03813516906020013561094a565b61018e600480360360408110156104c357600080fd5b506001600160a01b0381351690602001356109b8565b6102d0600480360360e08110156104ef57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356109cc565b6102da6004803603604081101561054057600080fd5b506001600160a01b0381358116916020013516610b64565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105e45780601f106105b9576101008083540402835291602001916105e4565b820191906000526020600020905b8154815290600101906020018083116105c757829003601f168201915b505050505090505b90565b60006106036105fc610b8f565b8484610b93565b50600192915050565b600054610100900460ff16806106255750610625610c7f565b80610633575060005460ff16155b61066e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff16158015610699576000805460ff1961ff0019909116610100171660011790555b6106a284610c90565b6106ac8484610d67565b6106b582610e1d565b80156106c7576000805461ff00191690555b50505050565b60355490565b60006106e0848484610e33565b610756846106ec610b8f565b610751856040518060600160405280602881526020016118e2602891396001600160a01b038a1660009081526034602052604081209061072a610b8f565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610f9c16565b610b93565b5060019392505050565b60385460ff1690565b6000610773611033565b905090565b6000610603610785610b8f565b846107518560346000610796610b8f565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61106616565b60006107d884846109b8565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561085357818101518382015260200161083b565b50505050905090810190601f1680156108805780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3610897846110c7565b15610756576107568484846110cd565b6001600160a01b031660009081526033602052604090205490565b6001600160a01b03811660009081526099602052604081206108e3906111a7565b92915050565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105e45780601f106105b9576101008083540402835291602001916105e4565b6000610603610957610b8f565b84610751856040518060600160405280602581526020016119536025913960346000610981610b8f565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610f9c16565b60006106036109c5610b8f565b8484610e33565b83421115610a21576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610a56609960008e6001600160a01b03166001600160a01b031681526020019081526020016000206111a7565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e0909101909152805191012090506000610ab4826111ab565b90506000610ac4828787876111f7565b9050896001600160a01b0316816001600160a01b031614610b2c576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610b4d90611362565b610b588a8a8a610b93565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3390565b6001600160a01b038316610bd85760405162461bcd60e51b815260040180806020018281038252602481526020018061192f6024913960400191505060405180910390fd5b6001600160a01b038216610c1d5760405162461bcd60e51b81526004018080602001828103825260228152602001806117846022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000610c8a306110c7565b15905090565b600054610100900460ff1680610ca95750610ca9610c7f565b80610cb7575060005460ff16155b610cf25760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff16158015610d1d576000805460ff1961ff0019909116610100171660011790555b610d2561136b565b610d4882604051806040016040528060018152602001603160f81b81525061140d565b610d51826114cd565b8015610d63576000805461ff00191690555b5050565b600054610100900460ff1680610d805750610d80610c7f565b80610d8e575060005460ff16155b610dc95760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff16158015610df4576000805460ff1961ff0019909116610100171660011790555b610dfc61136b565b610e06838361158a565b8015610e18576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b6001600160a01b038316610e785760405162461bcd60e51b815260040180806020018281038252602581526020018061190a6025913960400191505060405180910390fd5b6001600160a01b038216610ebd5760405162461bcd60e51b81526004018080602001828103825260238152602001806117616023913960400191505060405180910390fd5b610ec8838383610e18565b610f0b816040518060600160405280602681526020016117a6602691396001600160a01b038616600090815260336020526040902054919063ffffffff610f9c16565b6001600160a01b038085166000908152603360205260408082209390935590841681522054610f40908263ffffffff61106616565b6001600160a01b0380841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561102b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ff0578181015183820152602001610fd8565b50505050905090810190601f16801561101d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061077360405180806118906052913960520190506040518091039020611059611662565b611061611668565b61166e565b6000828201838110156110c0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3b151590565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b8381101561113b578181015183820152602001611123565b50505050905090810190601f1680156111685780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561118957600080fd5b505af115801561119d573d6000803e3d6000fd5b5050505050505050565b5490565b60006111b5611033565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b0382111561124e5760405162461bcd60e51b81526004018080602001828103825260228152602001806117cc6022913960400191505060405180910390fd5b8360ff16601b148061126357508360ff16601c145b61129e5760405162461bcd60e51b815260040180806020018281038252602281526020018061186e6022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa1580156112f6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611359576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600054610100900460ff16806113845750611384610c7f565b80611392575060005460ff16155b6113cd5760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff161580156113f8576000805460ff1961ff0019909116610100171660011790555b801561140a576000805461ff00191690555b50565b600054610100900460ff16806114265750611426610c7f565b80611434575060005460ff16155b61146f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff1615801561149a576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015610e18576000805461ff0019169055505050565b600054610100900460ff16806114e657506114e6610c7f565b806114f4575060005460ff16155b61152f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff1615801561155a576000805460ff1961ff0019909116610100171660011790555b6040518060526117ee8239604051908190036052019020609a55508015610d63576000805461ff00191690555050565b600054610100900460ff16806115a357506115a3610c7f565b806115b1575060005460ff16155b6115ec5760405162461bcd60e51b815260040180806020018281038252602e815260200180611840602e913960400191505060405180910390fd5b600054610100900460ff16158015611617576000805460ff1961ff0019909116610100171660011790555b825161162a9060369060208601906116c8565b50815161163e9060379060208501906116c8565b506038805460ff191660121790558015610e18576000805461ff0019169055505050565b60655490565b60665490565b600083838361167b6116c4565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061170957805160ff1916838001178555611736565b82800160010185558215611736579182015b8281111561173657825182559160200191906001019061171b565b50611742929150611746565b5090565b6105ec91905b80821115611742576000815560010161174c56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220d786c57ed07fa6f42c8c1535954969c7f43d3dade4b1ce67205af9bd46c89e7064736f6c634300060b0033'