import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Summarize() {
  const navigate = useNavigate()
  const [summarize, setSummarize] = useState({})
  return (
    <div className='h-[100vh] w-[100%] flex flex-col justify-center gap-3 items-center'>
   <div className="flex w-[40%] justify-end gap-1 pr-[20px]">
            <button
              onClick={() => navigate("/")}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Back
            </button>
            <button
              onClick={() => navigate("/project" )}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Next
            </button>
          </div>
  {/* {JSON.stringify(summarize)} */}
      <div className='w-[40%] border-t-2 shadow-2xl border-t-pink-800  flex flex-col gap-2 rounded-md p-4'>
        <h1 className='font-semibold text-[22px]'>Summary</h1>
        <label className='text-[14px] text-gray-500 '>Summarize your work experience, education and skills here.</label>
        <div className='w-[100%] h-[40vh] '>
        <textarea  onChange={(e)=>setSummarize({...summarize,text:e.target.value})} className='w-[100%] h-[40vh] border p-4' placeholder='e.g. Dedicated [High School] Teacher with [7] years of experience…'></textarea>
        </div>
       </div>
      </div>
  )
}

export default Summarize