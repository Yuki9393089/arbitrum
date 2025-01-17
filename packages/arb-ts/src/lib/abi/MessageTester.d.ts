/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface MessageTesterInterface extends ethers.utils.Interface {
  functions: {
    'addMessageToInbox(bytes32,bytes32)': FunctionFragment
    'messageHash(uint8,address,uint256,uint256,uint256,uint256,bytes32)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'addMessageToInbox',
    values: [BytesLike, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'messageHash',
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string

  decodeFunctionResult(
    functionFragment: 'addMessageToInbox',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'messageHash', data: BytesLike): Result

  events: {}
}

export class MessageTester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: MessageTesterInterface

  functions: {
    addMessageToInbox(
      inbox: BytesLike,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    messageHash(
      messageType: BigNumberish,
      sender: string,
      blockNumber: BigNumberish,
      timestamp: BigNumberish,
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>
  }

  addMessageToInbox(
    inbox: BytesLike,
    message: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  messageHash(
    messageType: BigNumberish,
    sender: string,
    blockNumber: BigNumberish,
    timestamp: BigNumberish,
    inboxSeqNum: BigNumberish,
    gasPriceL1: BigNumberish,
    messageDataHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  callStatic: {
    addMessageToInbox(
      inbox: BytesLike,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    messageHash(
      messageType: BigNumberish,
      sender: string,
      blockNumber: BigNumberish,
      timestamp: BigNumberish,
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    addMessageToInbox(
      inbox: BytesLike,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    messageHash(
      messageType: BigNumberish,
      sender: string,
      blockNumber: BigNumberish,
      timestamp: BigNumberish,
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    addMessageToInbox(
      inbox: BytesLike,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    messageHash(
      messageType: BigNumberish,
      sender: string,
      blockNumber: BigNumberish,
      timestamp: BigNumberish,
      inboxSeqNum: BigNumberish,
      gasPriceL1: BigNumberish,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
