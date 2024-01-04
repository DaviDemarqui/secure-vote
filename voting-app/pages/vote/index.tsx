import { NextPage } from 'next'
import React from 'react'

const Vote: NextPage = () => {  return (
  <main className="h-screen lg:flex">
    <div className="md:w-3/5 h-full w-full bg-white shadow-lg rounded-l-lg flex items-center justify-center">
        <div className="border md:h-[80%] md:w-[80%] h-full w-full border-slate-800 rounded-lg">
          <img src="https://c8.alamy.com/comp/P76C5Y/test-tv-screen-background-old-tv-no-signal-tee-graphic-vector-design-P76C5Y.jpg" className="h-full w-full rounded-lg"/>
        </div>
    </div>
      <div className="md:w-2/5 w-full md:h-full pt-10 md:pt-0 flex items-center justify-center bg-zinc-100 rounded-r-lg">
          <div className="w-3/4">
              <div className="grid grid-cols-3 gap-4">
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">1</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">2</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">3</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">4</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">5</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">6</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">7</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">8</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">9</button>
                  <button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 font-semibold text-white rounded">0</button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-10">
                <button className="py-2 px-4 bg-white hover:bg-slate-100 border border-slate-300 font-semibold text-black rounded">Don't Vote</button>
                <button className="py-2 px-4 bg-green-500 hover:bg-green-600 border border-green-700 font-semibold text-black rounded">Confirm Vote</button>
                <button className="py-2 px-4 bg-red-500 hover:bg-red-600 border border-red-700 font-semibold text-black rounded">Undo</button>
              </div>

          </div>
      </div>
  </main>
  )
}

export default Vote