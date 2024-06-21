import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament } from '../redux/slices/counter';

const CountNumber = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className='flex justify-center py-4'>
      <button onClick={() => { dispatch(decreament()) }} className='px-2 flex justify-center items-center rounded-full bg-orange-500 text-white font-bold'>-</button>
      <h4 className='mx-3'>Count is {count}</h4>
      <button onClick={() => { dispatch(increament()) }} className='px-2 flex justify-center items-center rounded-full bg-orange-500 text-white font-bold'>+</button>
    </div>
  )
}

export default CountNumber