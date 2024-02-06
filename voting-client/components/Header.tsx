import { ConnectWallet } from '@thirdweb-dev/react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <header className="text-gray-600 body-font fixed w-full bg-white border-b border-zinc-200 z-50">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <Link href={'/'} className="flex title-font font-semibold items-center text-slate-900 mb-4 md:mb-0">
              <span className="ml-3 text-2xl">SecureVote</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {/* <a className="mr-5 hover:text-gray-900">First Link</a>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
            </nav>
            <ConnectWallet
              className="inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
              theme={"light"}
              modalSize={"wide"}
            ></ConnectWallet>
          </div>
        </header>
    </div>
  )
}

export default Header