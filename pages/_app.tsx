import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/gideon-roman";

import { ethers } from "ethers";

const theme = extendTheme({
	fonts: {
		body: "Gideon Roman",
		heading: "Gideon Roman",
	},
	styles: {
		global: {
			body: {},
		},
	},
	componenents: {
		Alert: {
			variants: {
				yellow: {
					bg: "yellow.400",
				},
			},
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
