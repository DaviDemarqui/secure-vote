import Link from 'next/link'
import React from 'react'

function PoliticSelection() {
  return (
    <div>
        <div className="py-20">
            <div className="container mx-auto px-6 text-center md:px-12">
                <div className="mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
                    Select a candidate to vote
                </h2>
                <p className="text-gray-600 lg:mx-auto lg:w-8/12">
                    Tailus prides itself not only on award-winning technology, but also on the talent of its
                    people of some of the brightest minds and most experienced executives in business.
                </p>
                </div>
                <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
                <div className="group space-y-8 border-t-4 border-gray-100">
                    <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                    <img
                        className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                        src="https://i0.wp.com/diariopatriota.com.br/wp-content/uploads/2023/01/burro.jpg?fit=768%2C636&ssl=1"
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                    />
                    </div>
                    <div className="space-y-4 text-center">
                    <div>
                        <h4 className="text-2xl text-gray-700">Lula</h4>
                        <span className="block text-sm text-gray-500">Candidato do PT</span>
                    </div>
                    <Link href="/vote" className="mx-auto block w-max text-slate-900 bg-slate-200 hover:bg-slate-300 px-10 py-2 rounded-lg">Vote</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>                   
    </div>
  )
}

export default PoliticSelection