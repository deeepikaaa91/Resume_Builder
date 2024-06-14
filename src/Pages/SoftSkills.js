import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SoftSkills() {
  const navigate = useNavigate()
  const [softSkills,setSoftSills] = useState({})
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center'>
    {JSON.stringify(softSkills)}
      <div className='h-[80vh] w-[50%] border-t-2 shadow-2xl border-t-blue-500  flex flex-col gap-2 rounded-md p-4'>
        <h1 className='font-semibold text-[22px]'>Soft Skills</h1>
        <label className='text-[14px] text-gray-400'>Add relevant professional key skills and proficiencies.</label>
        <div className='w-[100%] h-[10vh] flex gap-2 border items-center px-2 border-gray-300'>
          <label className='text-[14px]'>Skill</label>
          <input onChange={(e)=>setSoftSills({...SoftSkills,skill:e.target.value})} className='border h-[6vh] w-[100%] rounded-md pl-2 outline-none' placeholder=''></input>
        </div>
        <label className='text-[25px] text-blue-500 items-center'>+<span className='text-[14px]'>Add more Skills</span></label>
        <button onClick={()=>navigate("/summarize")} className='w-[15%] h-[6vh] rounded-2xl bg-[red] flex self-end items-center justify-center text-white'>Next</button>
 </div>
 </div>
  )
}

export default SoftSkills
