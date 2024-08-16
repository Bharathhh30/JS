import React from 'react'
import { offer } from '../assets/images'
import Buttons from '../components/Buttons'
import { arrowRight } from '../assets/icons'

function SpecialOffers() {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer} alt="offer images" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
      
        <h2 className=' font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'> 
        <span className='text-coral-red'> Special </span>Offer
        <br />
        </h2>
        <p className='mt-4  lg:max-w-lg info-text'>Discover the Nike Styles innovated for your desires and comfort Blah blah blah . Ensuring primeium comfort for the user 
          as the customers so that they purchase me more than any otehr brand.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Buttons label = 'Shop Now' iconUrl = {arrowRight}/>
        <Buttons label = 'Learn More'  iconUrl = {arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers