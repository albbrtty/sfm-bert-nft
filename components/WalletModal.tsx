import {
    Button,
    Flex,
    Modal,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Text,
    ButtonProps,
    ModalCloseButton,
    ModalFooter,
} from "@chakra-ui/react";
import React, { ReactChild, ReactChildren, useEffect, useState } from "react";

import {
    InjectedConnector,
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
    WalletConnectConnector,
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";
import { Web3ReactHooks } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { hooks, walletConnect } from "../connectors/walletConnect";

const metaMask = await import("../connectors/metamask").then((v) => v.metaMask);

import { Connector } from "@web3-react/types";
import dynamic from "next/dynamic";
const BSC = "https://bsc-dataseed.binance.org/";

enum ConnectorNames {
    Metamask = "Metamask",
    WalletConnect = "WalletConnect",
}

const connectorByName: { [name in ConnectorNames]: Connector } = {
    [ConnectorNames.Metamask]: metaMask,
    [ConnectorNames.WalletConnect]: walletConnect,
};

const WalletModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [activeConnector, setActiveConnector] = useState<Connector>();
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#15141a"} maxWidth={{ base: "75%", lg: "20%" }}>
                <ModalHeader fontWeight={400} letterSpacing={"wider"}>
                    <Text color={"white"}>Connect a wallet</Text>
                    <Flex flexDir={"column"}>
                        {Object.keys(connectorByName).map((name) => {
                            const currentConnector =
                                connectorByName[
                                    name as keyof typeof connectorByName
                                ];

                            return (
                                <WalletButton
                                    key={name}
                                    loadingText={"Connecting"}
                                    onClick={() => {
                                        currentConnector.activate();
                                        setActiveConnector(currentConnector);
                                        onClose();
                                    }}
                                >
                                    <Text width={"100%"} align={"left"}>
                                        {name}
                                    </Text>
                                </WalletButton>
                            );
                        })}
                        <Button
                            mt={1}
                            bg={"red.600"}
                            _hover={{ bg: "" }}
                            onClick={() => {
                                activeConnector?.deactivate();
                                onClose();
                            }}
                        >
                            Disconnect
                        </Button>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    );
};

const WalletButton = (props: ButtonProps) => {
    return (
        <Button
            {...props}
            borderColor={"blackAlpha.200"}
            borderWidth={2}
            my={1}
        />
    );
};
export default WalletModal;
