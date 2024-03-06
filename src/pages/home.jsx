import React from 'react'
import Navbar from '../components/navbar'
import Content from '../components/content'

const img2 = 'public/images/9c77bced-d6b2-4c35-b356-4bd095b6534d.jpeg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='px-36 py-24'>
        <div className='flex flex-row justify-between'>
          <img className='w-[600px] h-[300px] object-cover rounded-2xl' src={img2} alt="img1" />
          <div className='flex flex-col max-w-[600px] justify-center gap-4'>
            <h1 className='text-5xl font-bold'>Capturing beautiful moments inside lens and shutterspeed</h1>
            <p>Find your perfect space</p>
            <button className='btn'>Browse Properties</button>
          </div>
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Home