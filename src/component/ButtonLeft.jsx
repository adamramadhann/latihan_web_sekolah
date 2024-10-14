import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const ButtonLeft = (prop, className) => {
    const { onClick, style} = prop
  return (
    <button onClick={onClick} className={`${className} text-white absolute z-10 top-[200px] left-1 text-2xl`}  >
        <FaArrowLeft className='relative -left-4' />
    </button>
  )
}

export default ButtonLeft