import React from 'react';

const Contentvard = [
    {
        img: "./public/images/Refined living and elevated design aesthetics come together to create sophisticated urban sanctuary.jpeg", 
        imagealt: "ps",
        title: "Luxurious Villa",
        para: "Spacious and elegant living"
    },
    {
        img: "./public/images/Modern house by the ocean.jpeg", 
        imagealt: "ps",
        title: "Cozy Cottage",
        para: "A warm and intimate retreat"
    },
    {
        img: "./public/images/9c77bced-d6b2-4c35-b356-4bd095b6534d.jpeg", 
        imagealt: "ps",
        title: "Modern Apartment",
        para: "Sleek design in the city"
    },
];

const Content = () => {
    return (
        <div className='flex flex flex-row gap-4 mt-32'>
            {Contentvard.map((contentItem, index) => (
                <div key={index}>
                    <img className='min-w-[400px] h-[300px] rounded-2xl object-cover' src={contentItem.img} alt={contentItem.imagealt} />
                    <h2 className='font-bold text-2xl'>{contentItem.title}</h2>
                    <p className='font-light text-state-400'>{contentItem.para}</p>
                </div>
            ))}
        </div>
    );
};

export default Content;
