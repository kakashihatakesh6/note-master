/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  let token = localStorage.getItem('auth-token');

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('auth-token');
    navigate('/')
  }

  return (
    <div>

      <div className='p-4 shadow-md'>
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* logo */}
          <div className='flex items-center'>
            <a href="#" className='text-red-500 font-bold font-serif uppercase text-3xl tracking-wider'>Note
              <span className='text-blue-800 skew-y-12 transition-all'> Master</span></a>
          </div>


          {/* Sliding Menu */}

          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-0 left-0 w-3/4 bg-slate-200 h-full z-50`}>
            <div className='p-4'>
              <a href="/" className='block text-black py-2'>Home</a>
              <a href="/" className='block text-black py-2'>About</a>
              <a href="/" className='block text-black py-2'>Services</a>
              <a href="/" className='block text-black py-2'>Contact</a>
              <button onClick={handleLogout} className='block text-black py-2'>Logout</button>
            </div>
          </div>


          {/* Navbar Links (hidden mobile, shown on m and lg screen) */}
          <div className="hidden md:flex space-x-4 font-bold items-center">
            <button href="#" className='text-black hover:text-gray-300 bg-orange-300 outline-blue-300 border-2 px-3 py-1 rounded-md'>Read ePaper</button>
            <button href="#" className='text-white hover:text-gray-300 uppercase bg-red-600 border-2 px-3 py-1 rounded-md'>Subscribe to np+</button>
            {token &&
              <button onClick={handleLogout} className='text-white px-3 py-1 bg-orange-600
               border-2 border-orange-300 transition delay-150 ease-in-out hover:translate-y-1
                hover:bg-white hover:text-orange-600 rounded-md uppercase'>Logout</button>
            }
          </div>

          {/* Hamburger Menu */}
          {token &&
            <div className='md:hidden'>
              <div className='flex justify-center items-center border-[1px] p-1 rounded-sm border-slate-700'>
                <button className='text-black focus:outline-none' onClick={toggleMenu}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          }

        </div>
      </div>

    </div >
  )
}

export default Navbar