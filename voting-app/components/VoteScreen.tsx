import React from 'react'

function VoteScreen() {
  return (
    <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100">
                    <img src="https://i0.wp.com/diariopatriota.com.br/wp-content/uploads/2023/01/burro.jpg?fit=768%2C636&ssl=1" loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />

                    {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span> */}
                    </div>
                </div>

                <div className="md:py-8">
                    <div className="mb-2 md:mb-3">
                    <span className="mb-0.5 inline-block text-gray-500">Party</span>
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Politic Name</h2>
                    </div>

                    <div className="mb-6 flex items-center md:mb-10">



                    {/* <a href="#" className="text-sm font-semibold text-slate-500 transition duration-100 hover:text-slate-600 active:text-slate-700">view all 47 reviews</a> */}
                    </div>

                    <div className="mb-4">
                    <div className="block items-end gap-2">
                        <span className="text-xl font-bold text-gray-800 md:text-2xl">Voting Number: 13</span>
                    </div>

                    <input type="text" placeholder='Confirm your vote' className='px-5 py-2 rounded-lg border bg-slate-100 border-slate-300 mt-3' />

                    </div>

                    <div className="flex gap-2.5">
                    <a href="#" className="inline-block flex-1 rounded-lg bg-slate-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-slate-300 transition duration-100 hover:bg-slate-600 focus-visible:ring active:bg-slate-700 sm:flex-none md:text-base">Confirm Vote</a>

                    </div>

                    <div className="mt-10 md:mt-16 lg:mt-20">
                        <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>

                        <p className="text-gray-500">
                            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.<br /><br />

                            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default VoteScreen