import React from 'react'
import Navbar from '../components/navbar'
import Content from '../components/content'
import Choosecard from '../components/chooseCard'
import TestimonialCard from '../components/testmonialcard';

const img2 = 'public/images/9c77bced-d6b2-4c35-b356-4bd095b6534d.jpeg'
const img1 = 'public/images/Modern house by the ocean.jpeg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='md:px-36 md:py-24'>
        <div className='flex flex-col justify-between md:flex-row'>
          <img className='md:w-[600px] w-full h-[300px] object-cover rounded-2xl' src={img2} alt="img1" />
          <div className='flex flex-col max-w-[600px] justify-center gap-4'>
            <h1 className='text-5xl font-bold'>Capturing beautiful moments inside lens and shutterspeed</h1>
            <p>Find your perfect space</p>
            <button className='btn'>Browse Properties</button>
          </div>
        </div>
        <div>
          <Content />
        </div>
        <div className='mt-16 mb-16'>
          <div className='text-4xl font-bold'>Why Choose Us</div>
          <div className='mt-16'>
            <Choosecard/>
          </div>
        </div>
        <div className='flex flex-row flex-start gap-8'>
          <img src={img1} alt="" srcset="" className='md:w-[1000px] w-full h-[300px] object-cover rounded-2xl' />
          <div className='flex flex-col w-full'>
            <h1 className='text-2xl font-bold'>Featured Property</h1>
            <p className='text-state-400 font-light'>A stunning mansion with breathtaking views</p>
          </div>
        </div>
        <TestimonialCard />
        <div>
          <div className='mt-16 flex flex-col gap-4 items-center'>
            <h1 className='text-4xl font-bold'>Let's discuss your vision</h1>
            <p className='text-state-400 font-light'>Connect with us and let us find you the perfect home.</p>
            <div className=''>
              <input className='w-[500px] px-4 py-1 active:border-transparent rounded-full' type="email" name="email" id="" placeholder='Enter your email address' />
              <button className='btn'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home