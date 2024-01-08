import Link from 'next/link'
import React from 'react'

function CandidateBox(candidate: any) {

    return (
        <div>
            <div className="group space-y-8 border-t-4 border-gray-100">
                <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                    className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                    src={candidate.photo}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                />
                </div>
                <div className="space-y-4 text-center">
                <div>
                    <h4 className="text-2xl text-gray-700">{candidate.name}</h4>
                    <span className="block text-sm text-gray-500"><b>From the party:</b> {candidate.partyName}</span>
                </div>
                <Link href={'vote/'+candidate.id } className="mx-auto block w-max text-slate-900 bg-slate-200 hover:bg-slate-300 px-10 py-2 rounded-lg">Vote</Link>
                </div>
            </div>
            
        </div>
    )
}

export default CandidateBox