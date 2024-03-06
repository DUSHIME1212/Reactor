import React from 'react';
import { ShieldCheck, House, GraduationCap, Fish } from "@phosphor-icons/react/dist/ssr";

const choose = [
    {
        logo: <ShieldCheck size={32} />,
        title: "Trusted by Thousands",
        para: "Over 10,000 happy homeowners"
    },
    {
        logo: <House size={32} />,
        title: "Wide Range of Properties",
        para: "From rustic cabins to urban lofts"
    },
    {
        logo: <GraduationCap size={32} />,
        title: "Expert Agents",
        para: "Professional advice and support"
    },
];

const chooselinks = [
    {
        title: "All Properties"
    },
    {
        title: "New Listings"
    },
    {
        title: "Open Houses"
    }
]

const ChooseCard = () => {
    return (
        <>
            <div className='flex flex-row justify-between w-full'>
                {choose.map((chooseItem, index) => (
                    <div className='border rounded-2xl border-state-400 p-4 min-w-[400px]' key={index}>
                        {chooseItem.logo}
                        <h1 className='text-2xl font-bold'>{chooseItem.title}</h1>
                        <p className='text-state-400 font-light'>{chooseItem.para}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-between w-full'>
                {chooselinks.map((chooseItem, index) => (
                    <ul key={index} className='flex justify-center'>
                        <li className='border rounded-2xl border-state-400 min-w-[200px]'>{chooseItem.title}</li>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default ChooseCard;
