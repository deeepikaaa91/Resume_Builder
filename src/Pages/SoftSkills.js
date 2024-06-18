import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SoftSkills() {
  const navigate = useNavigate()
  const [softSkills,setSoftSills] = useState({})
  const [moreDiv, setMoreDiv] = useState([])

  const moreskills=()=>{
    setMoreDiv([...moreDiv,moreDiv])
  }
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center flex-col gap-3 '>
    {JSON.stringify(softSkills)}
    <div className='w-[50%] flex justify-end '>
    <button onClick={()=>{localStorage.setItem("softskills",JSON.stringify(softSkills)); navigate("/summarize"); }} className='w-[15%] h-[6vh] rounded-2xl bg-[red] flex self-end items-center justify-center text-white'>Next</button>
    </div>
      <div className=' w-[50%] border-t-2 shadow-2xl border-t-blue-500  flex flex-col gap-2 rounded-md px-8 py-4'>
        <h1 className='font-semibold text-[22px] pl-8'>Soft Skills</h1>
        <label className='text-[14px] text-gray-400 pl-8'>Add relevant professional key skills and proficiencies.</label>
        <div className='w-[100%] h-[10vh] flex gap-2 border items-center px-2 border-gray-300 rounded-md'>
          <label className='text-[14px]'>Skill</label>
          <input onChange={(e)=>setSoftSills({...SoftSkills,skill:e.target.value})} className='border h-[6vh] w-[100%] rounded-md pl-2 outline-blue-300' placeholder=''></input>
          <i class="fa fa-trash cursor-pointer" aria-hidden="true"></i>
        </div>
        {moreDiv.map((i)=>
        <div className='w-[100%] h-[10vh] flex gap-2 border items-center px-2 border-gray-300 rounded-md'>
          <label className='text-[14px]'>Skill</label>
          <input onChange={(e)=>setSoftSills({...SoftSkills,skill:e.target.value})} className='border h-[6vh] w-[100%] rounded-md pl-2 outline-blue-300' placeholder=''></input>
          <i class="fa fa-trash cursor-pointer" aria-hidden="true"></i>
        </div>)}
        <button onClick={()=>moreskills()} className='text-[25px] text-blue-500 items-center flex '>+<span className='text-[14px]'>Add more Skills</span></button>
 </div>
 </div>
  )
}

export default SoftSkills
