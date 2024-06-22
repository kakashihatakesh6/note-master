/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Search from './Search'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const headerLinks = [
    { title: 'Politics', href: '/' },
    { title: 'Sports', href: '' },
    { title: 'Bangalore', href: '' },
    { title: 'India', href: '' },
    { title: 'Electronics', href: '' },
    { title: 'Economy', href: '' },
    { title: 'Agriculture', href: '' },
    { title: 'Finance', href: '' },
    { title: 'Travel', href: '' },
    { title: 'Food', href: '' },

  ]
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>

      <div className='p-4'>
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* logo */}
          <div className='flex items-center'>
            <a href="/" className='text-red-800 font-bold font-serif uppercase text-3xl tracking-wider'>News Point</a>
          </div>


          {/* Sliding Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-0 left-0 w-3/4 bg-slate-200 h-full z-50`}>
            <div className='p-4'>
              <a href="/" className='block text-black py-2'>Home</a>
              <a href="/" className='block text-black py-2'>About</a>
              <a href="/" className='block text-black py-2'>Favorite</a>
              <a href="/" className='block text-black py-2'>Services</a>
              <a href="/" className='block text-black py-2'>Contact</a>
            </div>
          </div>

          {/* Navbar Links (hidden mobile, shown on m and lg screen) */}
          <div className="hidden md:flex space-x-4 font-bold items-center">
            <button href="#" className='text-black hover:text-gray-300 bg-orange-300 outline-blue-300 border-2 px-3 py-1 rounded-md'>Read ePaper</button>
            <button href="#" className='text-white hover:text-gray-300 uppercase bg-red-600 border-2 px-3 py-1 rounded-md'>Subscribe to toi+</button>

            <a href="#" className='text-black hover:text-gray-300 uppercase'>Sign In</a>
          </div>

          {/* Hamburger Menu */}
          <div className='md:hidden'>
            <div className='flex justify-center items-center border-[1px] p-1 rounded-sm border-slate-700'>
              <button className='text-black focus:outline-none' onClick={toggleMenu}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className='overflow-x-hidden'>
        <div className="max-w-7xl px-4 py-1 border-t-[1px] border-b-[1px] border-slate-400 flex flex-col md:flex-row mx-auto justify-between space-y-2 md:space-y-0 items-center">

          <div className='flex space-x-2 mx-auto md:space-x-6'>
            {headerLinks.map((item, index) => (
              <a key={index} href={`/${item?.title?.toLowerCase()}`} className='uppercase'>{item.title}</a>
            ))}

          </div>

          <div className="flex">
            <Search />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar