import { useAddress } from '@thirdweb-dev/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function CandidateBox(candidate: any) {
    const [isLogged, setIsLogged] = useState(false);
    const address = useAddress();

    useEffect(() => {
        if (address) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    })

    return (
        <div>
            <div className="group space-y-8 rounded-2xl mb-14">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <img
                    className={"mx-auto h-full w-full scale-125 object-cover transition duration-300 group-hover:scale-[1.4] " + (candidate.partyName === 'Republicans' ? 'bg-red-600' : candidate.partyName === 'Democrats' ? 'bg-blue-600' : 'bg-slate-100')}                    src={candidate.photo}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                />
                </div>
                <div className="space-y-4 text-center">
                <div>
                    <h4 className="text-2xl font-medium text-gray-700">{candidate.name}</h4>
                    <span className="block text-sm text-gray-500">{candidate.partyName}</span>
                </div>
                    <Link href={'vote/'+candidate.id } className="mx-auto block w-max text-white bg-black px-16 py-2 rounded-full">Vote</Link>
                
                </div>
            </div>
            
        </div>
    )
}

export default CandidateBox