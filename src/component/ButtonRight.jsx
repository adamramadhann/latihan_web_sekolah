import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ButtonRight = (prop) => {
    const {style, onClick} = prop
  return (
    <button onClick={onClick} className={`style text-white absolute z-10 top-[190px] -right-[25px] text-2xl  `} >
        <FaArrowRight className='relative -left-4' />
    </button>
  )
}

export default ButtonRight