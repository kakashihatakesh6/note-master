import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Register from './Register'
import Login from './Login'


const Home = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true)



  return (
    <div className='min-h-fit relative grid grid-cols-1 md:grid-cols-2 overflow-x-hidden'>
      <div className='bg-white relative md:top-48 flex flex-col justify-start items-center p-5'>

        <div className='flex flex-col justify-center items-center mb-12 space-y-8'>
          <h1 className='text-orange-500 text-4xl font-bold mb-4 flex text-pretty px-6 justify-center'>Welcome to Note Master</h1>
          <p className='text-blue-900 text-lg font-semibold text-justify'>Capture, organize, and manage your thoughts effortlessly with NoteNest. Our intuitive note-taking app offers a seamless experience for jotting down ideas, to-do lists, and important reminders. Stay productive and keep your notes synchronized across all your devices, ensuring that your inspiration is always at your fingertips.</p>
        </div>

      </div>
      <div className='bg-green-400 min-h-[90vh] flex flex-col justify-center items-center p-8'>
        {/* <h2 className='text-3xl font-bold mb-6'>Get started with registering</h2> */}
        {/* <p className='text-white text-lg'>You can put any content here. The layout is responsive and adjusts to different screen sizes.</p> */}
        <div className='flex flex-col w-full'>

          {isLoginVisible ? (
            <Login setIsLoginVisible={setIsLoginVisible} />
          ) : (
            <Register setIsLoginVisible={setIsLoginVisible} />
          )}

        </div>

      </div>

    </div>


  )
}

export default Home