import React from 'react'

function Buttons({label, iconUrl}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-1 bg-coral-red rounded-full text-white border-coral-red'>
        {label}
        {/* console.log(label) */}
        <img src={iconUrl} alt="arrow right icon" className='ml-5 rounded-full w-5 h-5' />
    </button>
  )
}

export default Buttons