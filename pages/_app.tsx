import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/gideon-roman";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const theme = extendTheme({
    fonts: {
        body: "Gideon Roman",
        heading: "Gideon Roman",
    },
});
export function getLibrary(provider: any) {
    return new ethers.providers.Web3Provider(provider);
}
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </Web3ReactProvider>
    );
}

export default MyApp;
