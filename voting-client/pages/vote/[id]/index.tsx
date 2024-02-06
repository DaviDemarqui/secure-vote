import { NextPage } from 'next'
import React from 'react'
import Header from '../../../components/Header'
import VoteScreen from '../../../components/VoteScreen'

const Vote: NextPage = () => {  return (
  <div>
    <Header />
    <main className="h-screen lg:flex">
      
      <VoteScreen />
    </main>
  </div>
  )
}

export default Vote