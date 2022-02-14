import {
	Box,
	Button,
	Flex,
	Heading,
	Img,
	SimpleGrid,
	Spinner,
	useDisclosure,
} from "@chakra-ui/react";
import { getPriorityConnector } from "@web3-react/core";
import { useState, useEffect, createElement, useMemo } from "react";
import { metaMask, hooks as metamaskHooks } from "../connectors/metamask";
import { walletConnect, hooks } from "../connectors/walletConnect";
import { useContract } from "../src";
import { BertNFT } from "../typechain/BertNFT";
import { IERC20 } from "../typechain/IERC20";
import nft from "./api/nft";
import sfmABI from "../abis/safemoon.json";
import nftABI from "../abis/nft.json";
import dynamic from "next/dynamic";
import WalletModal from "../components/WalletModal";
const Inventory: React.FC = () => {
	const priority = getPriorityConnector(
		[metaMask, metamaskHooks],
		[walletConnect, hooks]
	);
	const [connector, library, account] = [
		priority.usePriorityConnector(),
		priority.usePriorityProvider(),
		priority.usePriorityAccount(),
	];
	const [nftDisplay, updateDisplay] = useState(<></>);
	const [nftBalance, updateBalance] = useState(0);
	const sfm = useContract(
		"0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
		sfmABI
	) as IERC20;
	const nft = useContract(
		"0x01541172283a8ceff0d68b387b445bc2755f2a3f",
		nftABI
	) as BertNFT;
	useEffect(() => {
		if (nft) {
			let totalSupply = 0;
			nft.totalSupply().then(async (v) => {
				totalSupply = v.toNumber();
				updateDisplay(<Spinner />);
				let nfts = new Array();
				console.log(totalSupply);
				for (let index = 0; index < totalSupply; index++) {
					await (async () => {
						try {
							await nft.ownerOf(index).then((v) => {
								console.log(v == account, index);

								if (v == account) {
									let thisIndex = index;
									const Element: React.FC = () => {
										const [uri, setURI] = useState(
											"https://sfm-bert-nft.vercel.app/api/nft_img?=" +
												thisIndex
										);

										return (
											<Flex
												flexDir={"column"}
												bg={"blackAlpha.50"}
												maxW={"fit-content"}
												borderRadius={16}
												p={4}
												key={thisIndex}
											>
												<Heading fontSize={20}>
													SFM NFT #{thisIndex}
												</Heading>
												<Img
													mt={2}
													onMouseEnter={() => {
														setURI(uri);
														console.log(uri);
													}}
													alt={`image of nft #${thisIndex}`}
													bg={"blackAlpha.800"}
													p={4}
													borderRadius={16}
													src={uri}
												/>
											</Flex>
										);
									};
									nfts.push(
										createElement(
											Element,
											{ key: index },
											{}
										)
									);
								}
							});
						} catch {}
					})();
				}
				console.log(nfts);
				updateDisplay(<>{nfts}</>);
			});

			nft.balanceOf(account!).then((v) => {
				updateBalance(v.toNumber());
				console.log(v);
			});
		}
	}, [nft, account]);
	const { onOpen, isOpen, onClose } = useDisclosure();
	return (
		<Box
			minH={"100vh"}
			display={"flex"}
			flexDir={"column"}
			alignItems={"center"}
			justifyContent={"end"}
		>
			<WalletModal isOpen={isOpen} onClose={onClose} />
			<Box
				minH={{ base: "100vh", md: "50vh" }}
				bg={"#dde5ec"}
				w={{ base: "90%", md: "container.md" }}
				display={"inline-flex"}
				p={4}
				flexDir={"column"}
				borderTopRadius={{ base: 0, md: 16 }}
			>
				<Flex w={"100%"} justifyContent={"space-between"}>
					<Heading mb={2}>Your Inventory</Heading>
					<Button
						onClick={() => {
							onOpen();
						}}
						my={{ base: 2, md: 0 }}
						bg={account ? "green.200" : "blackAlpha.50"}
						_hover={{ bg: "" }}
					>
						{account
							? `${account.substring(0, 5)}..${account.substring(
									account.length - 3,
									account.length
							  )}`
							: "Connect wallet"}
					</Button>
				</Flex>
				{<Sub nftDisplay={nftDisplay} />}
			</Box>
		</Box>
	);
};
const Sub: React.FC<{ nftDisplay: JSX.Element }> = ({ nftDisplay }) => {
	const Inven: React.FunctionComponent = () => {
		return (
			<SimpleGrid
				maxH={"fit-content"}
				borderRadius={16}
				columns={{ base: 2, lg: 4 }}
				gap={2}
			>
				{/* @ts-ignore */}
				{nftDisplay}
			</SimpleGrid>
		);
	};
	const Element = dynamic(async () => Inven, {
		ssr: false,
		loading: () => {
			return <Spinner />;
		},
	});
	return <Element />;
};

export default Inventory;
