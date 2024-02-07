import React from 'react'
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
// import { getPoliticianById, postVote } from '../util/useContract';

type VoteScreenProps = {
    id: any;
};

function VoteScreen({ id }: VoteScreenProps) {

    console.log('Initializing VoteScreen... ', id);
    const { contract } = useContract("0x3969a7cF135c3DC7f2Ab0451bbCc1182BaD914Af");
    const { mutateAsync: vote } = useContractWrite(contract, "vote");

    const call = async () => {
        try {
            await vote({ args: [id] });
            console.info("contract call successs");
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const { data, isLoading } = useContractRead(contract, "candidates", [id]);
    
    return (
            <div>
                <div className="bg-white py-6 sm:py-8 lg:py-12 items-center">
                    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-10">
                                    <img src={data?.photo} loading="lazy" alt="Candidate Photo" className="h-full w-full object-cover object-center" />
                                    {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span> */}
                                </div>
                            </div>

                            <div className="md:py-8">
                                <div className="mb-2 md:mb-3">
                                    <span className="mb-0.5 inline-block text-gray-500">Candidate Party: {data?.partyName}</span>
                                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Name: {data?.name}</h2>
                                </div>

                                <div className="mb-4">
                                    <div className="mt-1">
                                        <div className="mb-3 text-lg font-semibold text-gray-800">About {data?.name}:</div>

                                        <p className="text-gray-500">{data?.description}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2.5">
                                    <button onClick={call} className="inline-block flex-1 rounded-full bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-slate-300 transition duration-100 hover:bg-slate-900 focus-visible:ring active:bg-slate-700 sm:flex-none md:text-base">
                                        Confirm Vote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default VoteScreen;