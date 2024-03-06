import React from 'react';
import { InstagramLogo, FacebookLogo, FigmaLogo } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
    return (
        <div className="text-black p-4 flex items-center flex-col mt-16">
            <div className='flex w-full items-center justify-evenly mb-4'>
                <h1 className="cursor-pointer hover:underline">Privacy Policy</h1>
                <h1 className="cursor-pointer hover:underline">Terms of Service</h1>
                <h1 className="cursor-pointer hover:underline">Contact Us</h1>
            </div>
            <div className='flex gap-2 text-center'>
                <InstagramLogo size={24} className="cursor-pointer hover:text-green-900" />
                <FacebookLogo size={24} className="cursor-pointer hover:text-green-900" />
                <FigmaLogo size={24} className="cursor-pointer hover:text-green-900" />
            </div>
            <h1 className="mt-4 text-center">©2023 Realtor</h1>
        </div>
    );
}

export default Footer;
