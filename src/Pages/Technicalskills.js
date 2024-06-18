import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Technicalskills() {
  const navigate = useNavigate();
  const [moreDiv, setMoreDiv] = useState([])
  const moreskills=()=>{
    setMoreDiv([...moreDiv,moreDiv])
  }
  return (
    <div className="h-[100vh]  w-[100%] flex  flex-col  justify-center items-center gap-2 ">
     <div className="flex w-[40%] justify-end gap-2 pr-[20px]">
              <button
                onClick={() => navigate("/Education")}
                className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
              >
                Back
              </button>
              <button
                onClick={() => navigate("/SoftSkills")}
                className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
              >
               Next
              </button>
            </div>
      <div className=" w-[40%] shadow-2xl border-t-2  flex flex-col pt-[10px] pl-[50px] gap-2 border-blue-400  rounded-lg ">
        <h1 className="font-bold ">Technical Skills</h1>
        <p className="text-gray-400 text-[13px]">Add relevant professional key skills and proficiencies</p>
        <div className="h-[60vh] w-[80%]  flex flex-col gap-2 ">
          <div className="flex flex-col gap-3">
          <div className="h-[10vh] w-[100%] flex  pl-[10px] items-center border-[1px]  gap-2">
              <label>Skill</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
          {moreDiv.map((i)=>{
            <div className="h-[10vh] w-[90%] flex  pl-[10px] items-center border-[1px]  gap-2">
              <label>Skill</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>})}
            <div className="w-[100%]  h-[10vh]  flex  pr-[60px] ">
              <button onClick={()=>moreskills()} className="h-[5vh]  text-[13px] text-blue-600">
                + Add More Skills
              </button>
            </div>
          
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TechnicalSkills
