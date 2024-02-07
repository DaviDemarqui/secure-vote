import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import VoteScreen from '../../components/VoteScreen';
import Header from '../../components/Header';

const Vote: NextPage = () => { 

  const router = useRouter();
  
  return (
  <div>
    <Header />
    <main className="h-screen lg:flex py-10">
      <VoteScreen id={router.query.id} />
    </main>
  </div>
  )
}

export default Vote