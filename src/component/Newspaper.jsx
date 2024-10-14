import React, { useState } from 'react'

const Newspaper = () => {
    const [tab, setTab] = useState('Update')

    const hanldeTab = (e) => {
        setTab(e)
    }

    return (
        <section className='w-full max-h-[330px] flex flex-col items-center mb-48'>
            <h1 className='text-2xl mb-8 font-bold' >Latest News</h1>
            <nav className='flex w-full'>
                <button onClick={() => hanldeTab('Update')} className={`flex-1 border-b ${tab === 'Update' ? 'border-b-green-500 text-green-500 ' : ''}`}>Update</button>
                <button onClick={() => hanldeTab('Populer')} className={`flex-1 border-b ${tab === 'Populer' ? 'border-b-green-500 text-green-500  ' : ''}`}>Populer</button>
            </nav>
            <article className='mt-3'>
                {
                    tab === "Update" && (
                        <div className='flex flex-col gap-5 max-h-[400px] overflow-y-auto'>
                            <article className='bg-[#bbfae0] text-[#19C37D] mx-5 rounded-md p-2'>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                                <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                    <h1>Icon</h1>
                                    <p>14 Nov 2023</p>
                                </article>
                            </article>
                            <article className=' mx-5 rounded-md p-2'>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                                <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                    <h1>Icon</h1>
                                    <p>14 Nov 2023</p>
                                </article>
                            </article>
                            <article className=' mx-5 rounded-md p-2'>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                                <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                    <h1>Icon</h1>
                                    <p>14 Nov 2023</p>
                                </article>
                            </article>
                            <article className=' mx-5 rounded-md p-2'>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                                <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                    <h1>Icon</h1>
                                    <p>14 Nov 2023</p>
                                </article>
                            </article>
                            {/* Artikel lainnya */}
                            <article className=' mx-5 rounded-md p-2'>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                                <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                    <h1>Icon</h1>
                                    <p>14 Nov 2023</p>
                                </article>
                            </article>
                            <article className=' mx-5 rounded-md p-2'>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                                <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                    <h1>Icon</h1>
                                    <p>14 Nov 2023</p>
                                </article>
                            </article>
                        </div>
                    )
                }
                {
                    tab === 'Populer' && (
                        <article className='bg-[#bbfae0] text-green-500 mx-5 rounded-md p-2'>
                            <p className='text-[15px]  '>Lorem ipsum dolor sit amet consectetur. Egestas aliquam eget velit sed etiam porttitor elementum.</p>
                            <article className='flex text-sm gap-3 text-[#95A5A6] mt-2'>
                                <h1>Icon</h1>
                                <p>14 Nov 2023</p>
                            </article>
                        </article>
                    )
                }
            </article>
        </section>
    )
}

export default Newspaper
