import { NextPage } from "next";
import Link from "next/link";
import {
  ThirdwebProvider,
  metamaskWallet,
  en,
} from "@thirdweb-dev/react";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains";
import Header from "../components/Header";
import PoliticSelection from "../components/PoliticSelection";

const clientId = process.env.CLIENT_ID;

const Home: NextPage = () => {
  return (
    <ThirdwebProvider
      activeChain={OpSepoliaTestnet}
      clientId={clientId}
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
      ]}
    >
      <main className="h-full">
        <Header />
        <PoliticSelection />
      </main>
    </ThirdwebProvider>
  );
};

export default Home;
