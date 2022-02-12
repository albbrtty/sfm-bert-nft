import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
    (actions) =>
        new WalletConnect(actions, {
            rpc: { 56: "https://bsc-dataseed.binance.org/" },
        })
);
