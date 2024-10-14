import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#141A3A] text-white h-[200px] w-full  ' >
            <article className='flex items-center flex-col text-center p-3 gap-5' >
                <h1>Prisma Office</h1>
                <p>Puri CInere Blok A3 Jl. Cibodas I No.7
                    Pangkalan Jati, Cinere Kota Depok
                    Kode Pos 16514
                </p>
                <span className='flex justify-between w-full' >
                    <p>+62 858-3916-0575</p>
                    <p>admin@lumiconn.id</p>
                </span>
            </article>
    </footer>
  )
}

export default Footer