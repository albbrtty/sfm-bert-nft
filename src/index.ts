import { Web3Provider, JsonRpcSigner } from "@ethersproject/providers";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { getAddress, isAddress } from "@ethersproject/address";
import { useMemo } from "react";
import { walletConnect, hooks } from "../connectors/walletConnect";
function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked();
}
function getProviderOrSigner(
    library: Web3Provider,
    account?: string
): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library;
}
export function getContract(
    address: string,
    ABI: any,
    library: Web3Provider,
    account?: string
): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }

    return new Contract(
        address,
        ABI,
        getProviderOrSigner(library, account) as any
    );
}
export function useContract<T extends Contract = Contract>(
    addressOrAddressMap: string | { [chainId: number]: string } | undefined,
    ABI: any,
    withSignerIfPossible = true
): T | null {
    const { library, account, chainId } = hooks.useWeb3React(
        hooks.useProvider()
    );

    return useMemo(() => {
        if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
        let address: string | undefined;
        if (typeof addressOrAddressMap === "string")
            address = addressOrAddressMap;
        else address = addressOrAddressMap[chainId];
        if (!address) return null;
        try {
            return getContract(
                address,
                ABI,
                library,
                withSignerIfPossible && account ? account : undefined
            );
        } catch (error) {
            console.error("Failed to get contract", error);
            return null;
        }
    }, [
        addressOrAddressMap,
        ABI,
        library,
        chainId,
        withSignerIfPossible,
        account,
    ]) as T;
}
