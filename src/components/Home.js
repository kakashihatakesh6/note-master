import React from 'react'
import News from './News'
import CountNumber from './CountNumber'

const Home = () => {

  return (
    <div className='flex w-full flex-col justify-center'>
        <CountNumber />
        <News />
    </div>
  )
}

export default Home