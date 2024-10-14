import React, { useState } from 'react';
import LogoPrisma from "/logosmk.webp";
import halamanSekolah from "/smk_prisma.webp";
import { AiFillCaretRight, AiOutlineBars } from "react-icons/ai";   
import Slider from 'react-slick';
import ButtonLeft from './component/ButtonLeft';
import ButtonRight from './component/ButtonRight';
import Newspaper from './component/Newspaper';
import CardAlumni from './component/CardAlumni';
import Footer from './component/Footer';

const App = () => {
  const [tab, setTab] = useState('Visi');

  const tabs = [
    { id: 1, title: 'Visi' },
    { id: 2, title: 'Misi' }
  ];

  function handleTab(e) {
    setTab(e);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ButtonLeft  />,
    nextArrow: <ButtonRight />
  };


  const settings2 = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const cardImage = [
    { img: 'otkp.webp' },
    { img: 'otkp.webp' },
    { img: 'otkp.webp' },
  ]



  return (
    <div className='w-full h-[100vh] bg-slate-100 overflow-x-hidden'>
      <header className='flex w-full justify-between items-center p-4'>
        <h1>
          <img src={LogoPrisma} alt="logo smk prisma" className='h-12' />
        </h1>
        <button className='text-[25px]'>
          <AiOutlineBars />
        </button>
      </header>

      <main className='mt-5 flex flex-col items-center'>
        <section className='w-[95%] max-w-5xl'>
          <h1 className='font-semibold text-[25px] text-center'>
            Membangun Generasi <br /> Unggul Melalui Keberagaman Keahlian di SMK PRISMA.
          </h1>
          <button className='text-[16px] h-10 w-[150px] bg-blue-500 mb-10 text-white rounded-md mt-5'>
            Get Started
          </button>
        </section>

        <section className='w-[95%] max-w-5xl mt-5 rounded-md border-2 pb-1 p-3 bg-white shadow-xl'>
          <article className='flex flex-col gap-4 p-5'>
            <h2 className='text-2xl font-semibold'>PROFILE</h2>
            <img src={halamanSekolah} alt="halaman sekolah" className='rounded-lg mt-3' />
            <p className='text-justify leading-relaxed text-base'>
              SMK Prisma memiliki komitmen kuat untuk mencetak generasi muda yang siap menghadapi tantangan dunia kerja dengan empat jurusan unggulan...
            </p>
          </article>
        </section>

        <section className='w-[95%] max-w-5xl shadow-xl bg-white border mt-16 mb-10 p-5 rounded-xl'>
          <div className='flex w-full'>
            {tabs.map((e) => (
              <button
                onClick={() => handleTab(e.title)}
                key={e.id}
                className={`${tab === e.title ? 'border-b-green-500 text-green-500' : ''} hover:border-b text-xl w-40 border-b-2`}>
                {e.title}
              </button>
            ))}
          </div>
          <article className='mt-6'>
            {tab === 'Visi' && (
              <>
                <h1 className='text-xl font-semibold mb-3'>School Visi</h1>
                <p className='text-justify'>
                  Menjadi Sekolah Menengah Kejuruan Unggul yang Menghasilkan Lulusan Berkompeten, Berkarakter, dan Berdaya Saing Tinggi di Era Globalisasi.
                </p>
              </>
            )}
            {tab === 'Misi' && (
              <>
                <h1 className='text-xl font-semibold mb-3'>School Misi</h1>
                <p className='text-justify'>
                  Mendidik dan melatih para siswa dan siswi terampil bekerja dan berbisnis dengan mengaplikasikan sarana teknologi dan media bahasa asing.
                </p>
              </>
            )}
          </article>
        </section>

        <section className='bg-[#1C77C3] w-full mb-14 h-[620px] p-5'>
          <div className=''>
            <h1 className='text-white text-[30px] font-semibold mb-8 mt-3 text-center'>Akademik</h1>
            <h2 className='text-end flex items-center justify-end text-[18px] text-white mb-1'>
              See ALL <AiFillCaretRight className='text-xl' />
            </h2>

            <Slider {...settings}>
              <div>
                <img src="Rectangle 130.png" alt="Jurusan Tkj" className='' />
                <h1 className='text-xl font-bold flex items-center justify-center relative -top-14 text-white '>
                  Teknik Jaringan Komputer
                </h1>
              </div>
              <div>
                <img src="Rectangle 130.png" alt="Jurusan Tkj" className='' />
                <h1 className='text-xl font-bold flex items-center justify-center relative -top-14 text-white '>
                  Pemasaran
                </h1>
              </div>
              <div>
                <img src="Rectangle 130.png" alt="Jurusan Tkj" className='' />
                <h1 className='text-xl font-bold flex items-center justify-center relative -top-14 text-white '>
                  OTKP
                </h1>
              </div>
              <div>
                <img src="Rectangle 130.png" alt="Jurusan Tkj" className='' />
                <h1 className='text-xl font-bold flex items-center justify-center relative -top-14 text-white '>
                  AKL
                </h1>
              </div>
            </Slider>
          </div>
        </section>

        <section className='mb-40 w-full h-full flex flex-col items-center'>
          <h1 className=' text-2xl font-semibold mb-5'>DOCUMENTATION</h1>
          <div className='w-[95%] max-w-5xl border-2 h-[430px] text-center rounded-xl'>
            <h1 className='bg-blue-500 rounded-t-xl h-12 flex items-center justify-center text-xl text-white'>
              Image
            </h1>
            <h3 className='text-end pr-4 mt-3 mb-1'>See All</h3>
            <div className='flex items-center justify-center gap-2 z-10 object-cover'>
              <img src='tkj.webp' alt="Gambar Jurusan Teknik Jaringan Komputer" className='rounded-md h-[155px] w-[155px]' />
              <img src='tkj.webp' alt="Gambar Jurusan Teknik Jaringan Komputer" className='rounded-md h-[155px] w-[155px]' />
            </div>
            <div className='text-center flex items-center justify-center w-full'>
  <Slider {...settings2} className='w-[315px] mt-2 '>
    {cardImage.map((e, index) => (
      <img key={index} src={e.img} alt="Jurusan Tkj" className='h-[150px] object-cover rounded-md ' />
    ))}
  </Slider>
</div>
          </div>
        </section>

        <section className='bg-[#1C77C3] w-full h-[1150px] mb-10 -mt-24 flex flex-col items-center ' >
          <h1 className='text-3xl mt-5  text-white font-bold ' >REGISTRATION</h1>
          <h1 className='text-xl text-white  mb-5 ' >PPDB Registration form</h1>
          <img src="public/Group 151.png" alt="" />
          <div className='w-full flex flex-col gap-5 mb-9 px-5 mt-5  '>
              <input type="text" name="nama" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Nama Lengkap' />
              <input type="text" name="tempatLahir" className='h-10 rounded-xl select-none outline-none  pl-4' placeholder='Tempat Lahir' />
              <span className='flex flex-col  ' >
                <label htmlFor="tanggalLahir" className='text-white capitalize ' >tanggal Lahir :</label>
                <input type="date" name="tanggalLahir" className='h-10 rounded-x w-full l select-none outline-none p-1' placeholder='Tanggal Lahir' />
              </span>
              <input type="text" name="alamat" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Alamat Lengkap' />
              <input type="text" name="nik" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='NIK' />
              <input type="text" name="asalSekolah" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Asal Sekolah' />
              <input type="text" name="jurusanPilihan1" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Pilihan Jurusan 1' />
              <input type="text" name="jurusanPilihan2" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Pilihan Jurusan 2' />
              <input type="text" name="nomorTelepon" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Nomor Telepon/HP' />
              <input type="email" name="email" className='h-10 rounded-xl select-none outline-none pl-4' placeholder='Email' />
        </div>
        <button className=' w-[87%] py-3 rounded-xl bg-green-500 text-white' >Submit</button>
        </section>
      <Newspaper/>
      <CardAlumni/>
      <Footer/>
      </main>
    </div>
  );
};

export default App;
