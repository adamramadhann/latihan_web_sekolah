import React from 'react'

const CardAlumni = () => {
  return (
    <section className='flex flex-col items-center text-white bg-[#1C77C3] h-[350px] ' >
        <h1 className='text-2xl font-bold  mt-5 ' >ALUMNI</h1>
        <p className='text-xl font-semibold mt-3' >What Our Students Say
        About Us</p>

        <article className='mt-10 border mx-2 p-3 bg-white text-black rounded-md ' >
            <article className='flex gap-3 items-center' >
            <img src="public/tkj.webp" alt="" className='w-16 h-16 rounded-full' />
                <span className='' >
                <h2 className='text-xl' >Eleanor Pena</h2>
                <p className='text-xs' >Graphic Designer</p>
                </span>
            </article>
            <p className='text-sm leading-5 mt-2 ' >Lorem ipsum dolor sit amet consectetur. Arcu justo condimentum porttitor pharetra sit id libero pellentesque. Mattis ultrices et risus egestas mi urna.</p>
        </article>
    </section>
  )
}

export default CardAlumni