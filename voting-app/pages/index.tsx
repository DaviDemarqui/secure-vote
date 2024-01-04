import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link href={"/vote"} className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Connect Wallet</Link>
    </main>
  );
};

export default Home;
