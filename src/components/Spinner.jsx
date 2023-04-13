import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full my-[15rem]'>
      <div className='spinner'></div>
      <p className='font-extrabold'>Loading...</p>
    </div>
  )
}

export default Spinner
