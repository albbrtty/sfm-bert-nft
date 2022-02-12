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
    Overrides,
    CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BertNFTInterface extends ethers.utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseURI()": FunctionFragment;
        "bertbert()": FunctionFragment;
        "bertbertPerNFT()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "max()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rescueToken(address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "sfm()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };

    encodeFunctionData(
        functionFragment: "approve",
        values: [string, BigNumberish]
    ): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "bertbert",
        values?: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "bertbertPerNFT",
        values?: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "getApproved",
        values: [BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "isApprovedForAll",
        values: [string, string]
    ): string;
    encodeFunctionData(functionFragment: "max", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "ownerOf",
        values: [BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "renounceOwnership",
        values?: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "rescueToken",
        values: [string, BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "safeTransferFrom",
        values: [string, string, BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "setApprovalForAll",
        values: [string, boolean]
    ): string;
    encodeFunctionData(
        functionFragment: "setBaseURI",
        values: [string]
    ): string;
    encodeFunctionData(functionFragment: "sfm", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "supportsInterface",
        values: [BytesLike]
    ): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "tokenByIndex",
        values: [BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "tokenOfOwnerByIndex",
        values: [string, BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "tokenURI",
        values: [BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "totalSupply",
        values?: undefined
    ): string;
    encodeFunctionData(
        functionFragment: "transferFrom",
        values: [string, string, BigNumberish]
    ): string;
    encodeFunctionData(
        functionFragment: "transferOwnership",
        values: [string]
    ): string;

    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "balanceOf",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bertbert", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "bertbertPerNFT",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "getApproved",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "isApprovedForAll",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "renounceOwnership",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "rescueToken",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "safeTransferFrom",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "setApprovalForAll",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "setBaseURI",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "sfm", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "supportsInterface",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "tokenByIndex",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "tokenOfOwnerByIndex",
        data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(
        functionFragment: "totalSupply",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "transferFrom",
        data: BytesLike
    ): Result;
    decodeFunctionResult(
        functionFragment: "transferOwnership",
        data: BytesLike
    ): Result;

    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class BertNFT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    listeners<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
    ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
    off<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    on<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    once<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
        listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
        eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
    ): this;

    listeners(eventName?: string): Array<Listener>;
    off(eventName: string, listener: Listener): this;
    on(eventName: string, listener: Listener): this;
    once(eventName: string, listener: Listener): this;
    removeListener(eventName: string, listener: Listener): this;
    removeAllListeners(eventName?: string): this;

    queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
        event: TypedEventFilter<EventArgsArray, EventArgsObject>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

    interface: BertNFTInterface;

    functions: {
        approve(
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        balanceOf(
            owner: string,
            overrides?: CallOverrides
        ): Promise<[BigNumber]>;

        baseURI(overrides?: CallOverrides): Promise<[string]>;

        bertbert(overrides?: CallOverrides): Promise<[string]>;

        bertbertPerNFT(overrides?: CallOverrides): Promise<[BigNumber]>;

        getApproved(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[string]>;

        isApprovedForAll(
            owner: string,
            operator: string,
            overrides?: CallOverrides
        ): Promise<[boolean]>;

        max(overrides?: CallOverrides): Promise<[BigNumber]>;

        mint(
            _to: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        name(overrides?: CallOverrides): Promise<[string]>;

        owner(overrides?: CallOverrides): Promise<[string]>;

        ownerOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[string]>;

        renounceOwnership(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        rescueToken(
            _token: string,
            amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        "safeTransferFrom(address,address,uint256)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        "safeTransferFrom(address,address,uint256,bytes)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            _data: BytesLike,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        setApprovalForAll(
            operator: string,
            approved: boolean,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        setBaseURI(
            newUri: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        sfm(overrides?: CallOverrides): Promise<[string]>;

        supportsInterface(
            interfaceId: BytesLike,
            overrides?: CallOverrides
        ): Promise<[boolean]>;

        symbol(overrides?: CallOverrides): Promise<[string]>;

        tokenByIndex(
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[BigNumber]>;

        tokenOfOwnerByIndex(
            owner: string,
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[BigNumber]>;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<[string]>;

        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

        transferFrom(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        transferOwnership(
            newOwner: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;
    };

    approve(
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    bertbert(overrides?: CallOverrides): Promise<string>;

    bertbertPerNFT(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
        tokenId: BigNumberish,
        overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
        owner: string,
        operator: string,
        overrides?: CallOverrides
    ): Promise<boolean>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
        _to: string,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueToken(
        _token: string,
        amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
        from: string,
        to: string,
        tokenId: BigNumberish,
        _data: BytesLike,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
        operator: string,
        approved: boolean,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBaseURI(
        newUri: string,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sfm(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenByIndex(
        index: BigNumberish,
        overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
        owner: string,
        index: BigNumberish,
        overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
        from: string,
        to: string,
        tokenId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
        newOwner: string,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callStatic: {
        approve(
            to: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<void>;

        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

        baseURI(overrides?: CallOverrides): Promise<string>;

        bertbert(overrides?: CallOverrides): Promise<string>;

        bertbertPerNFT(overrides?: CallOverrides): Promise<BigNumber>;

        getApproved(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<string>;

        isApprovedForAll(
            owner: string,
            operator: string,
            overrides?: CallOverrides
        ): Promise<boolean>;

        max(overrides?: CallOverrides): Promise<BigNumber>;

        mint(_to: string, overrides?: CallOverrides): Promise<void>;

        name(overrides?: CallOverrides): Promise<string>;

        owner(overrides?: CallOverrides): Promise<string>;

        ownerOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<string>;

        renounceOwnership(overrides?: CallOverrides): Promise<void>;

        rescueToken(
            _token: string,
            amount: BigNumberish,
            overrides?: CallOverrides
        ): Promise<void>;

        "safeTransferFrom(address,address,uint256)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<void>;

        "safeTransferFrom(address,address,uint256,bytes)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            _data: BytesLike,
            overrides?: CallOverrides
        ): Promise<void>;

        setApprovalForAll(
            operator: string,
            approved: boolean,
            overrides?: CallOverrides
        ): Promise<void>;

        setBaseURI(newUri: string, overrides?: CallOverrides): Promise<void>;

        sfm(overrides?: CallOverrides): Promise<string>;

        supportsInterface(
            interfaceId: BytesLike,
            overrides?: CallOverrides
        ): Promise<boolean>;

        symbol(overrides?: CallOverrides): Promise<string>;

        tokenByIndex(
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        tokenOfOwnerByIndex(
            owner: string,
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<string>;

        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

        transferFrom(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<void>;

        transferOwnership(
            newOwner: string,
            overrides?: CallOverrides
        ): Promise<void>;
    };

    filters: {
        Approval(
            owner?: string | null,
            approved?: string | null,
            tokenId?: BigNumberish | null
        ): TypedEventFilter<
            [string, string, BigNumber],
            { owner: string; approved: string; tokenId: BigNumber }
        >;

        ApprovalForAll(
            owner?: string | null,
            operator?: string | null,
            approved?: null
        ): TypedEventFilter<
            [string, string, boolean],
            { owner: string; operator: string; approved: boolean }
        >;

        OwnershipTransferred(
            previousOwner?: string | null,
            newOwner?: string | null
        ): TypedEventFilter<
            [string, string],
            { previousOwner: string; newOwner: string }
        >;

        Transfer(
            from?: string | null,
            to?: string | null,
            tokenId?: BigNumberish | null
        ): TypedEventFilter<
            [string, string, BigNumber],
            { from: string; to: string; tokenId: BigNumber }
        >;
    };

    estimateGas: {
        approve(
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

        baseURI(overrides?: CallOverrides): Promise<BigNumber>;

        bertbert(overrides?: CallOverrides): Promise<BigNumber>;

        bertbertPerNFT(overrides?: CallOverrides): Promise<BigNumber>;

        getApproved(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        isApprovedForAll(
            owner: string,
            operator: string,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        max(overrides?: CallOverrides): Promise<BigNumber>;

        mint(
            _to: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        name(overrides?: CallOverrides): Promise<BigNumber>;

        owner(overrides?: CallOverrides): Promise<BigNumber>;

        ownerOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        renounceOwnership(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        rescueToken(
            _token: string,
            amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        "safeTransferFrom(address,address,uint256)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        "safeTransferFrom(address,address,uint256,bytes)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            _data: BytesLike,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        setApprovalForAll(
            operator: string,
            approved: boolean,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        setBaseURI(
            newUri: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        sfm(overrides?: CallOverrides): Promise<BigNumber>;

        supportsInterface(
            interfaceId: BytesLike,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        symbol(overrides?: CallOverrides): Promise<BigNumber>;

        tokenByIndex(
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        tokenOfOwnerByIndex(
            owner: string,
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

        transferFrom(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;

        transferOwnership(
            newOwner: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        approve(
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        balanceOf(
            owner: string,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        bertbert(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        bertbertPerNFT(
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        getApproved(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        isApprovedForAll(
            owner: string,
            operator: string,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        max(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        mint(
            _to: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        ownerOf(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        renounceOwnership(
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        rescueToken(
            _token: string,
            amount: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        "safeTransferFrom(address,address,uint256)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        "safeTransferFrom(address,address,uint256,bytes)"(
            from: string,
            to: string,
            tokenId: BigNumberish,
            _data: BytesLike,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        setApprovalForAll(
            operator: string,
            approved: boolean,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        setBaseURI(
            newUri: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        sfm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        supportsInterface(
            interfaceId: BytesLike,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        tokenByIndex(
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        tokenOfOwnerByIndex(
            owner: string,
            index: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        tokenURI(
            tokenId: BigNumberish,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        transferFrom(
            from: string,
            to: string,
            tokenId: BigNumberish,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;

        transferOwnership(
            newOwner: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;
    };
}
