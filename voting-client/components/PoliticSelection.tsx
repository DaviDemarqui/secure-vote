import Link from 'next/link'
import React from 'react'
import CandidateBox from './CandidateBox';
import { useContract, useContractRead } from "@thirdweb-dev/react";

function PoliticSelection() {
    const { contract } = useContract("0x3969a7cF135c3DC7f2Ab0451bbCc1182BaD914Af");

    console.log("CONTRACT: "+contract);
    const {data, isLoading} = useContractRead(contract, "getAllCandidates");
    // data;
    console.log(data);
    return (
    <div>
        <div className="py-20">
            <div className="container mx-auto px-6 pt-10 text-center md:px-12">
                <div>
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-4xl">
                        Select a candidate to vote
                    </h2>
                    <p className="text-gray-600 lg:mx-auto lg:w-8/12">
                        Tailus prides itself not only on award-winning technology, but also on the talent of its
                        people of some of the brightest minds and most experienced executives in business.
                    </p>
                </div>
                <div className="grid gap-28 pt-20 md:grid-cols-3 md:gap-12">
                    {!isLoading && data.length > 0 && data.map((data: any) => 
                    <CandidateBox
                        key={data.id}
                        {...data}
                    ></CandidateBox>
                    )}
                </div>
            </div>
        </div>                   
    </div>
  )
}

export default PoliticSelection