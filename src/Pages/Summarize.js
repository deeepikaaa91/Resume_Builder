import React from 'react'

function Summarize() {
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center'>
      <div className='h-[80vh] w-[50%] border-t-2 shadow-2xl border-t-pink-800  flex flex-col gap-3 rounded-md p-4'>
        <h1 className='font-semibold text-[22px]'>Summary</h1>
        <label className='text-[14px] text-gray-400'>Summarize your work experience, education and skills here.</label>
        <div className='w-[100%] h-[40vh] '>
            <textarea  className='w-[100%] h-[40vh] border p-4' placeholder='e.g. Dedicated [High School] Teacher with [7] years of experience…'></textarea>
        </div>
        <button className='w-[15%] h-[6vh] rounded-2xl bg-[red] flex self-end items-center justify-center text-white'>Next</button>


      </div>
      
    </div>
  )
}

export default Summarize