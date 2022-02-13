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
	Spinner,
	Alert,
	AlertIcon,
	useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bg from "../public/bg.jpg";
import Web3Modal from "web3modal";
import { providers } from "ethers";
const WalletModal = dynamic(() => import("../components/WalletModal"), {
	ssr: false,
});

import { Web3Provider } from "@ethersproject/providers";
import React, { useCallback, useEffect, useState } from "react";
import { getContract, useContract } from "../src";
import sfmABI from "../abis/safemoon.json";
import nftABI from "../abis/nft.json";
import { BertNFT, IERC20 } from "../typechain";
import { CopyIcon } from "@chakra-ui/icons";
import { walletConnect, hooks } from "../connectors/walletConnect";
import { metaMask, hooks as metamaskHooks } from "../connectors/metamask";
import { getPriorityConnector, Web3ReactHooks } from "@web3-react/core";
import dynamic, { DynamicOptions, Loader } from "next/dynamic";
import { jsx } from "@emotion/react";
export function getLibrary(provider: any) {
	return new providers.Web3Provider(provider);
}

const Home: React.FC = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const priority = getPriorityConnector(
		[metaMask, metamaskHooks],
		[walletConnect, hooks]
	);

	const [value, setValue] = useState(0); // integer state
	const [connector, library, account] = [
		priority.usePriorityConnector(),
		priority.usePriorityProvider(),
		priority.usePriorityAccount(),
	];
	const isActive = priority.usePriorityIsActive();
	console.log(isActive, account);
	useEffect(() => {
		library?.removeAllListeners();
		library?.addListener("block", () => {
			setValue((value) => value + 1);
		});
		if (!account) {
			// updateBalance(0);
			// updateDisplay(<></>);
			updateMint(<></>);
		}
	}, [connector, library, account]);
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
	const toast = useToast({ variant: "subtle" });
	useEffect(() => {
		(async () => {
			console.log(sfm);
			if (sfm) {
				const _allowance = await sfm.allowance(account!, nft!.address);
				if (_allowance.toNumber() < 3100 * 10e8) {
					await sfm.balanceOf(account!).then((v) => {
						updateAllowance(
							<>
								{v.toNumber() >= 3100 * 10e8 ? (
									<Button
										onClick={() => {
											sfm.approve(
												nft!.address,
												String(10000e9)
											).then(() => {
												toast({
													title: "Approved! You can now mint an NFT",
												});
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
										Insufficient SFM balance{" "}
										{`(You need ${
											Math.floor(
												(3100 * 10e8 - v.toNumber()) /
													10e6
											) / 100
										})`}
									</Text>
								)}
							</>
						);
					});
				} else {
					await sfm.balanceOf(account!).then((v) => {
						updateMint(
							<>
								{
									<Button
										bg={"green.400"}
										_hover={{ bg: "green.300" }}
										onClick={() => {
											if (nft) {
												nft.mint(account!);
											}
											toast({
												status: "warning",
												isClosable: true,

												title: "Insufficient Balance",
												description: `(You need ${
													Math.floor(
														(3100 * 10e8 -
															v.toNumber()) /
															10e6
													) / 100
												} more SFM)`,
											});
										}}
									>
										Mint
									</Button>
								}
							</>
						);
					});
				}
			}
		})();
	}, [account, library, connector, _uu, nft]);
	// const [nftSupply, updateSupply] = useState(1);
	// const [nftDisplay, updateDisplay] = useState(<></>);
	// const [nftBalance, updateBalance] = useState(0);
	// useEffect(() => {
	// 	if (nft) {
	// 		let totalSupply = 0;
	// 		nft.totalSupply().then(async (v) => {
	// 			totalSupply = v.toNumber();
	// 			updateDisplay(<Spinner />);
	// 			let nfts = new Array();
	// 			for (let index = 0; index < totalSupply; index++) {
	// 				console.log(index);
	// 				await nft.ownerOf(index + 1).then((v) => {
	// 					console.log(v, account);
	// 					if (v == account!) {
	// 						nfts.push(
	// 							<Flex
	// 								flexDir={"column"}
	// 								bg={"blackAlpha.50"}
	// 								maxW={"fit-content"}
	// 								borderRadius={16}
	// 								p={4}
	// 								key={index}
	// 							>
	// 								<Heading fontSize={20}>
	// 									SFM NFT #{index + 1}
	// 								</Heading>
	// 								<Img
	// 									mt={2}
	// 									alt={`image of nft #${index}`}
	// 									bg={"blackAlpha.800"}
	// 									p={4}
	// 									borderRadius={16}
	// 									src={
	// 										"https://sfm-bert-nft.vercel.app/api/nft_img?=" +
	// 										index
	// 									}
	// 								/>
	// 							</Flex>
	// 						);
	// 					}
	// 				});
	// 			}
	// 			console.log(nfts);
	// 			updateDisplay(<>{nfts}</>);
	// 		});

	// 		nft.balanceOf(account!).then((v) => {
	// 			updateBalance(v.toNumber());
	// 		});
	// 	}
	// }, [nft, account]);

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
					<Alert status={"info"} my={2} borderRadius={16}>
						<AlertIcon />
						<Text fontSize={16}>
							To mint an NFT, you will need 3100 SFM, plus you
							will be sent some{" "}
							<Link
								textColor={"blue.400"}
								textDecoration={"underline"}
								isExternal
								href={"https://bertbert.finance"}
							>
								bertbert
							</Link>{" "}
							as a gift 💚
						</Text>
					</Alert>
					<Flex alignItems={"center"}>
						<Text>Contract address: </Text>
						<Code ml={2}>
							{" "}
							0x01541172283a8ceff0d68b387b445bc2755f2a3f
						</Code>{" "}
					</Flex>

					<Button
						mt={8}
						bgGradient={"linear(to-l, blue.100, green.100)"}
					>
						<Link href={"/inventory"} textColor={"blue.600"}>
							<Text
								bgClip="text"
								bgGradient="linear(to-tl, blue.800, blackAlpha.900)"
								fontSize={18}
							>
								View your inventory here
							</Text>
						</Link>
					</Button>
					{/* {nftBalance > 0 ? (
						<Box my={2} bg={"whiteAlpha.100"} p={4}>
							<Heading mb={2}>Your Inventory</Heading>
							{<Inventory nftDisplay={nftDisplay} />}
						</Box>
					) : null} */}
					<Text>
						<sub>Created by albert — a 12 year old!</sub>
					</Text>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Home;
