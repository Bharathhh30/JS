import React from 'react'
import Buttons from '../components/Buttons'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'


function Superquality() {
  return (
    <section id="aboutus" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      
        <h2 className=' font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'> 
          We Provide You <span className='text-coral-red'> Super</span><span className='text-coral-red'> Quality </span>Shoes
        <br />
        </h2>
        <p className='mt-4  lg:max-w-lg info-text'>Discover the Nike Styles innovated for your desires and comfort Blah blah blah . Ensuring primeium comfort for the user 
          as the customers so that they purchase me more than any otehr brand.
        </p>
        <div className='mt-11'>
        <Buttons label = 'View Details' iconUrl = {arrowRight}/>
        </div>
      </div>
      <div className=' flex-1 flex justify-center'>
        <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain' />
      </div>
    </section>
  )
}

export default Superquality