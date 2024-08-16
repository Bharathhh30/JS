import React from 'react'
import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductCard'

function PopularProducts() {
  return (
    <section id='products'
    className='max-container max-sm:mt-12'>
      <div className='flex flex-cols justify-start  gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our 
          <span className='text-coral-red'> Popular</span> Product</h2><br />
        <p className='text-slate-gray lg:max-w-lg mt-2 font-montserrat'>Experience Top Quality of the Nike products by feeling and wearing it.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product)=>(
          <PopularProductsCard key=
          {product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts