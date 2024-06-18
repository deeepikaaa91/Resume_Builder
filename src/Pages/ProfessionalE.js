import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function ProfessionalE() {

  const navigate = useNavigate();
  const [professionalEx ,setProfessionalEx] = useState({})
  return (
   <div className="h-[100vh]  w-[100%] flex justify-center items-center">
    {JSON.stringify(professionalEx)}
    <div className="h-[100vh]  w-[80%] flex  flex-col  justify-center gap-3 items-center">
      <div>
      </div>
      <div className="flex w-[50%] justify-end gap-2 pr-[20px]">
            <button
              onClick={() => navigate("/")}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Back
            </button>
            <button
              onClick={() => navigate("/Education")}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Next
            </button>
          </div>
      <div className=" w-[50%]   shadow-2xl border-t-2  flex flex-col pt-[10px] pl-[50px]  border-red-400  rounded-lg ">
        <h1 className="font-bold ">Professional Experience</h1>
        <p className="text-gray-400">Tell us about your most recent job.</p>
        <div className="h-[60vh] w-[90%] pl-[10px] border  pt-[2%] flex flex-col gap-2">
          <div className="flex">
            <div className="h-[10vh] w-[50%] flex text-[12px]  gap-1 flex-col">
              <label>Position Title</label>
              <input onChange={(e)=>setProfessionalEx({...professionalEx, positionTitle:e.target.value})}
                className="border-[1px] border-gray outline-none h-[4vh] w-[90%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] text-[12px] flex flex-col">
              <label>Company Name</label>
              <input onChange={(e)=>setProfessionalEx({...professionalEx, companyName:e.target.value})}
                className="border-[1px] border-gray outline-none h-[4vh] w-[90%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex">
            <div className="h-[10vh] w-[50%] text-[12px] flex flex-col">
              <label>city</label>
              <input onChange={(e)=>setProfessionalEx({...professionalEx,city:e.target.value})}
                className="border-[1px] border-gray outline-none h-[4vh] w-[90%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] text-[12px]  flex flex-col">
              <label>State</label>
              <input onChange={(e)=>setProfessionalEx({...professionalEx,state:e.target.value})}
                className="border-[1px] border-gray outline-none h-[4vh] w-[90%]"
                type="text"
              ></input>
            </div>
          </div>

          <div className="flex">
            <div className="h-[10vh] w-[50%] text-[12px] flex flex-col">
              <label>start Date</label>
              <input onChange={(e)=>setProfessionalEx({...professionalEx,startDate:e.target.value})}
                className="border-[1px] border-gray outline-none h-[4vh] w-[90%]"
                type="date"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] flex text-[12px] flex-col">
              <label>End Date</label>
              <input onChange={(e)=>setProfessionalEx({...professionalEx,endDate:e.target.value})}
                className="border-[1px] border-gray  outline-none h-[4vh] w-[90%]"
                type="date"
              ></input>
            </div>
          </div>
          <div className="h-[20vh] w-[95%] flex text-[12px] flex-col ">
            <label>work Summary</label>
            <textarea
              className="border-[1px] h-[20vh] pl-[10px]"
              placeholder="enter your work summary......."
            ></textarea>
          </div>
                     
        </div>
       <div className="h-[5vh] w-[100%] flex text-[12px] items-center gap-2 text-red-600">
           <label className="font-bold text-[15px] ">+</label>
           <label>Add more work Experience</label>
           </div> 
      </div>
    </div>
    </div>
  );
}

export default ProfessionalE;
