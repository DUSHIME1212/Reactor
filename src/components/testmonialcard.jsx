import React from 'react';
import { ThumbsUp, ThumbsDown, HeartStraight } from "@phosphor-icons/react/dist/ssr";

const testimonial = [
    {
        img: './public/images/Modern house by the ocean.jpeg',
        titleName: 'Emily R.',
        date: 'Jan 12, 2023',
        rating: 4,
        para: "The team was incredibly helpful and the property exceeded expectations.",
        liked: 12,
        hated: 4
    },
    {
        img: './public/images/Modern house by the ocean.jpeg',
        titleName: 'John D.',
        date: 'Dec 5, 2022',
        rating: 5,
        para: "Smooth transaction and excellent communication throughout.",
        liked: 2,
        hated: 0
    },
    {
        img: './public/images/Modern house by the ocean.jpeg',
        titleName: 'Sophia W',
        date: 'Oct 23, 2022',
        rating: 5,
        para: "Absolutely in love with our new home, thanks to the dedicated agents.",
        liked: 15,
        hated: 2
    },
];

const renderRatings = (rating) => {
    let stars = []
    for(let i = 0; i < rating; i++){
        stars.push(<HeartStraight size={16} weight="fill"/>)
    }
    return stars
}

const testmonialcard = () => {
    return (
        <div className='mt-16 gap-4 flex'>
            {testimonial.map((testimonialItem, index) => {
                return (
                    <div className='flex flex-col gap-4 ring-offset-2 ring-1 ring-green-900 rounded-2xl p-2 max-w-[500px] min-w-[300px]' key={index}>
                        <div className='flex w-full gap-4'>
                            <img src={testimonialItem.img} className='w-16 h-16 object-cover rounded-full' alt="" srcset="" />
                            <div>
                                <h1 className='text-base font-medium'>{testimonialItem.titleName}</h1>
                                <p className='text-sm text-state-400 font-light'>{testimonialItem.date}</p>
                            </div>
                        </div>
                        <div className='w-full flex text-sm text-green-900'>
                            {renderRatings(testimonialItem.rating)}
                        </div>
                        <p className='text-sm'>{testimonialItem.para}</p>
                        <div className='flex gap-4'>
                            <div className='flex gap-2'><ThumbsUp size={24} />{testimonialItem.liked}</div>
                            <div className='flex gap-2'><ThumbsDown size={24} />{testimonialItem.hated}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default testmonialcard;
