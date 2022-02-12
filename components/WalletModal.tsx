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
    Box,
    Img,
} from "@chakra-ui/react";
import React, { ReactChild, ReactChildren, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import {
    InjectedConnector,
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
    WalletConnectConnector,
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
const BSC = "https://bsc-dataseed.binance.org/";

export const injected = new InjectedConnector({ supportedChainIds: [56] });

export const WalletConnect = new WalletConnectConnector({
    rpc: { 56: BSC },
    qrcode: true,
});

export const useEagerConnect = () => {
    const { activate, active } = useWeb3React();

    const [tried, setTried] = useState(false);

    useEffect(() => {
        injected.isAuthorized().then((isAuthorized: boolean) => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(() => {
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        });
    }, []); // intentionally only running on mount (make sure it's only mounted once :))

    // if the connection worked, wait until we get confirmation of that to flip the flag
    useEffect(() => {
        if (!tried && active) {
            setTried(true);
        }
    }, [tried, active]);

    return tried;
};

export function useInactiveListener(suppress: boolean = false) {
    const { active, error, activate } = useWeb3React();

    useEffect((): any => {
        const { ethereum } = window as any;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleConnect = () => {
                console.log("Handling 'connect' event");
                activate(injected);
            };
            const handleChainChanged = (chainId: string | number) => {
                console.log(
                    "Handling 'chainChanged' event with payload",
                    chainId
                );
                activate(injected);
            };
            const handleAccountsChanged = (accounts: string[]) => {
                console.log(
                    "Handling 'accountsChanged' event with payload",
                    accounts
                );
                if (accounts.length > 0) {
                    activate(injected);
                }
            };
            const handleNetworkChanged = (networkId: string | number) => {
                console.log(
                    "Handling 'networkChanged' event with payload",
                    networkId
                );
                activate(injected);
            };

            ethereum.on("connect", handleConnect);
            ethereum.on("chainChanged", handleChainChanged);
            ethereum.on("accountsChanged", handleAccountsChanged);
            ethereum.on("networkChanged", handleNetworkChanged);

            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener("connect", handleConnect);
                    ethereum.removeListener("chainChanged", handleChainChanged);
                    ethereum.removeListener(
                        "accountsChanged",
                        handleAccountsChanged
                    );
                    ethereum.removeListener(
                        "networkChanged",
                        handleNetworkChanged
                    );
                }
            };
        }
    }, [active, error, suppress, activate]);
}

enum ConnectorNames {
    Injected = "Metamask",
    WalletConnect = "WalletConnect",
}
const ConnectorComponents: { [key: string]: React.ElementType<any> } = {
    Metamask: () => {
        return (
            <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Text>Metamask</Text>
                <Img
                    alt={"metamask icon"}
                    w={8}
                    src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                />
            </Flex>
        );
    },
    Injected: () => {
        return (
            <Flex w={"100%"} justifyContent={"space-between"}>
                <Text alignSelf={"flex-start"}>Injected</Text>
            </Flex>
        );
    },
    WalletConnect: () => {
        return (
            <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Text>WalletConnect </Text>
                <Img
                    alt={"metamask icon"}
                    borderRadius={360}
                    w={8}
                    src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/31/7c/d0/317cd0a1-e7a9-5433-3da9-120432003ef2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png"
                />
            </Flex>
        );
    },
};
const connectorByName: { [name in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: WalletConnect,
};
function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
        return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } else if (error instanceof UnsupportedChainIdError) {
        return "You're connected to an unsupported network.";
    } else if (
        error instanceof UserRejectedRequestErrorInjected ||
        error instanceof UserRejectedRequestErrorWalletConnect
    ) {
        return "Please authorize this website to access your Ethereum account.";
    } else {
        console.error(error);
        return "An unknown error occurred. Check the console for more details.";
    }
}

const WalletModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const context = useWeb3React<Web3Provider>();
    const {
        connector,
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
        error,
    } = context;
    const [activatingConnector, setActivatingConnector] = React.useState<any>();
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect();

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={"#1b1b1b"} maxWidth={{ base: "75%", lg: "20%" }}>
                <ModalHeader fontWeight={400} letterSpacing={"wider"}>
                    <Text textColor={"#FFF"}> Connect a wallet</Text>

                    <Flex flexDir={"column"}>
                        {Object.keys(connectorByName).map((name) => {
                            const currentConnector =
                                connectorByName[
                                    name as keyof typeof connectorByName
                                ];
                            console.log(name);
                            const activating =
                                currentConnector === activatingConnector;
                            const connected = currentConnector === connector;

                            const disabled =
                                !triedEager ||
                                !!activatingConnector ||
                                connected ||
                                !!error;

                            return (
                                <WalletButton
                                    key={name}
                                    loadingText={"Connecting"}
                                    onClick={() => {
                                        console.log(`${name} activated`);
                                        setActivatingConnector(
                                            currentConnector
                                        );
                                        if (
                                            connector instanceof
                                            WalletConnectConnector
                                        ) {
                                            connector.walletConnectProvider =
                                                undefined;
                                        }
                                        activate(
                                            connectorByName[name as never],
                                            undefined,
                                            true
                                        ).catch((error) => {
                                            if (
                                                error instanceof
                                                UnsupportedChainIdError
                                            ) {
                                                alert(
                                                    "Please switch to the Binance Smart Chain"
                                                );
                                            }
                                        });
                                    }}
                                >
                                    {React.createElement(
                                        ConnectorComponents[name],
                                        {},
                                        {}
                                    )}
                                </WalletButton>
                            );
                        })}
                        <Button
                            bg={"red.400"}
                            my={2}
                            _hover={{ bg: "" }}
                            onClick={() => {
                                deactivate();
                                onClose();
                            }}
                        >
                            Disconnect
                        </Button>
                    </Flex>
                </ModalHeader>

                <ModalCloseButton color={"#FFFF"} bg={"blackAlpha.400"} />
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
