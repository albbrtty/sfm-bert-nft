import {
    Box,
    Heading,
    Text,
    Flex,
    useDisclosure,
    Button,
    Link,
    Icon,
    Code,
    SimpleGrid,
    Img,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bg from "../public/bg.jpg";
import Web3Modal from "web3modal";
import ethers from "ethers";
import WalletModal from "../components/WalletModal";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useCallback, useEffect, useState } from "react";
import { getContract, useContract } from "../src";
import sfmABI from "../abis/safemoon.json";
import nftABI from "../abis/nft.json";
import { BertNFT, IERC20 } from "../typechain";
import { CopyIcon } from "@chakra-ui/icons";
const Home: NextPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { account, library, connector } = useWeb3React<Web3Provider>();
    useEffect(() => {}, [connector, library, account]);

    const sfm = useContract(
        "0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
        sfmABI
    ) as IERC20;
    const nft = useContract(
        "0x01541172283a8ceff0d68b387b445bc2755f2a3f",
        nftABI
    ) as BertNFT;
    const [allowance, updateAllowance] = useState(<></>);
    const [_u, _uu] = useState(0);
    const [mint, updateMint] = useState(<></>);
    useEffect(() => {
        (async () => {
            if (sfm) {
                const _allowance = await sfm.allowance(account!, nft!.address);
                console.log(_allowance.toNumber());
                if (_allowance.toNumber() < 3100 * 10e8) {
                    await sfm.balanceOf(account!).then((v) => {
                        console.log(v.toNumber() >= 3100 * 10e8);

                        console.log(v.toNumber());
                        updateAllowance(
                            <>
                                {v.toNumber() >= 3100 * 10e8 ? (
                                    <Button
                                        onClick={() => {
                                            sfm.approve(
                                                nft!.address,
                                                String(10000e9)
                                            ).then(() => {
                                                updateAllowance(
                                                    <>
                                                        <Text
                                                            as={Button}
                                                            bg={"red.400"}
                                                            _hover={{
                                                                bg: "red.300",
                                                            }}
                                                        >
                                                            Insufficient SFM
                                                            balance
                                                        </Text>
                                                    </>
                                                );
                                            });
                                        }}
                                    >
                                        Approve
                                    </Button>
                                ) : (
                                    <Text
                                        as={Button}
                                        bg={"red.400"}
                                        _hover={{ bg: "red.300" }}
                                    >
                                        Insufficient SFM balance
                                    </Text>
                                )}
                            </>
                        );
                    });
                } else {
                    await sfm.balanceOf(account!).then((v) => {
                        updateMint(
                            <>
                                {v.toNumber() >= 3100 * 10e8 ? (
                                    <Button
                                        bg={"green.400"}
                                        _hover={{ bg: "green.300" }}
                                        onClick={() => {
                                            if (nft) {
                                                nft.mint(account!);
                                            }
                                        }}
                                    >
                                        Mint
                                    </Button>
                                ) : (
                                    <Text
                                        as={Button}
                                        bg={"red.400"}
                                        _hover={{ bg: "red.300" }}
                                    >
                                        Insufficient SFM balance
                                    </Text>
                                )}
                            </>
                        );
                    });
                }
            }
        })();
    }, [account, library, connector, _uu]);
    const [nftSupply, updateSupply] = useState(1);
    const [nftDisplay, updateDisplay] = useState(<></>);
    const [nftBalance, updateBalance] = useState(0);
    useEffect(() => {
        if (nft) {
            let totalSupply = 0;
            nft.totalSupply().then(async (v) => {
                totalSupply = v.toNumber();
                let nfts = new Array();
                for (let index = 0; index < totalSupply; index++) {
                    nfts.push(
                        <Flex
                            flexDir={"column"}
                            bg={"blackAlpha.50"}
                            maxW={"fit-content"}
                            borderRadius={16}
                            p={4}
                        >
                            <Heading fontSize={20}>
                                SFM NFT #{index + 1}
                            </Heading>
                            <Img
                                mt={2}
                                alt={`image of nft #${index}`}
                                bg={"blackAlpha.800"}
                                p={4}
                                borderRadius={16}
                                src={
                                    "https://sfm-bert-nft.vercel.app/api/nft_img?=" +
                                    index
                                }
                            />
                        </Flex>
                    );
                }
                console.log(nfts);
                updateDisplay(<>{nfts}</>);
            });

            nft.balanceOf(account!).then((v) => {
                updateBalance(v.toNumber());
            });
        }
    }, [nft, account]);
    return (
        <Flex>
            <WalletModal isOpen={isOpen} onClose={onClose} />
            <Box
                minH={"100vh"}
                minW={"100vw"}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"end"}
            >
                <Flex
                    minH={{ base: "100vh", md: "50vh" }}
                    bg={"#dde5ec"}
                    w={{ base: "90%", md: "container.md" }}
                    display={"inline-flex"}
                    p={4}
                    flexDir={"column"}
                    borderTopRadius={{ base: 0, md: 16 }}
                >
                    <Flex
                        alignItems={{ base: "", md: "center" }}
                        justifyContent={"space-between"}
                        w={"100%"}
                        flexDir={{ base: "column", md: "row" }}
                    >
                        <Heading>Safemoon NFT minter</Heading>{" "}
                        <Button
                            onClick={() => {
                                onOpen();
                            }}
                            my={{ base: 2, md: 0 }}
                            bg={account ? "green.200" : "blackAlpha.50"}
                            _hover={{ bg: "" }}
                        >
                            {account
                                ? `${account.substring(
                                      0,
                                      5
                                  )}..${account.substring(
                                      account.length - 3,
                                      account.length
                                  )}`
                                : "Connect wallet"}
                        </Button>
                    </Flex>
                    <Flex mt={4} flexDir={"column"}>
                        {allowance}
                        {mint}
                    </Flex>
                    <Text mt={4}>
                        In order to mint the NFT, you must approve the contract
                        to be able to mint. This is because minting the NFT
                        requries paying in safemoon.
                        <br />
                        <br />
                        as a gift, when you mint an nft, you will be sent some{" "}
                        <Link
                            textColor={"blue.400"}
                            textDecoration={"underline"}
                            isExternal
                            href={"https://bertbert.finance"}
                        >
                            bertbert
                        </Link>{" "}
                        tokens, a token that i made!
                    </Text>
                    <Text>
                        Contract address:{" "}
                        <Code> 0x01541172283a8ceff0d68b387b445bc2755f2a3f</Code>{" "}
                    </Text>
                    {nftBalance > 0 ? (
                        <Box my={2} bg={"whiteAlpha.100"} p={4}>
                            <Heading mb={2}>Your Inventory</Heading>
                            <SimpleGrid
                                maxH={"fit-content"}
                                borderRadius={16}
                                columns={{ base: 2, lg: 4 }}
                                gap={2}
                            >
                                {/* @ts-ignore */}
                                {nftDisplay}
                            </SimpleGrid>
                        </Box>
                    ) : (
                        0
                    )}

                    <Text>
                        <sub>Created by albert — a 12 year old!</sub>
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Home;
