import { NextPage } from "next";
import Header from "../components/Header";
import PoliticSelection from "../components/PoliticSelection";

const Home: NextPage = () => {
  return (
    <main className="h-full">
      <Header />
      <PoliticSelection />
    </main>
  );
};

export default Home;
