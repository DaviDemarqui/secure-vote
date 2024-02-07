import type { AppProps } from "next/app";
import "../styles/globals.css";
import Link from "next/link";
import {
  ThirdwebProvider,
  metamaskWallet,
  en,
} from "@thirdweb-dev/react";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains";

const clientId = process.env.CLIENT_ID;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={OpSepoliaTestnet}
      clientId={clientId}
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
