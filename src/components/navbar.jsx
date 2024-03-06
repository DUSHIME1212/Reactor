import React from 'react';
import { Asterisk, MagnifyingGlass , Pentagram, Horse, Heart, Cube } from '@phosphor-icons/react/dist/ssr';

const img1 = "./public/images/f93576f2-31d0-440d-9431-264fa4684b3d.jpeg"
const Navlinks = [
    {
        title: "Home",
        page: './page/Home.jsx'
    },
    {
        title: "About",
        page: './page/About.jsx'
    },
    {
        title: "Properties",
        page: './page/Properties.jsx'
    },
    {
        title: "Testimonials",
        page: './page/Testimonials.jsx'
    },
    {
        title: "Contact",
        page: './page/Contact.jsx'
    }
];

const Navbar = () => {
    return (
        <nav className='w-full flex flex-row justify-between items-center px-12 py-4 sticky top-0 backdrop-blur-lg'>
            <a href="./" className="font-bold flex items-center">
                <span><Asterisk size={32} /></span>
                Realtor
            </a>
            <ul className='flex gap-2'>
                {Navlinks.map((navitem, index) => (
                    <li key={index} className="cursor-pointer">{navitem.title}</li>
                ))}
            </ul>
            <div className='flex items-center rounded-full text-black'>
                <input className='px-4 py-1 rounded-full bg-none h-fit w-fit active:border-none' type="text" name="" id="" placeholder='search' />
                <MagnifyingGlass className='text-black' size={24} />
            </div>
            <div className='flex flex-row gap-8'>
                <div className='flex flex-row gap-2'>
                    <button className='px-4 py-1 w-fit h-fit rounded-full bg-green-600 text-white'>sign up</button>
                    <button className='px-4 py-1 w-fit h-fit rounded-full border border-green-900 text-green-900'>log in</button>
                </div>
                <img src={img1} className='w-8 h-8 rounded-full object-cover' alt="person imgae" />
            </div>
        </nav>
    );
};

export default Navbar;
