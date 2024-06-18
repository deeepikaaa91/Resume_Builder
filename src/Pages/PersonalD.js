import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonalD() {
  const navigate = useNavigate();
  const[information ,setInformation] = useState({})
  
  return (
    <div className="h-[100vh]  w-[100%] flex flex-col justify-center gap-3 items-center">
    <div>
    </div>
      <div className="w-[50%]  text-[13px] flex justify-end pr-[100px] ">
            <button
              onClick={() => {navigate("/ProfessionalE")}}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Next
            </button>
          </div>
      <div className="h-[70vh] w-[40%]  shadow-2xl border-t-2  flex flex-col pt-[10px] pl-[50px] gap-2 border-blue-900  rounded-lg ">
        <h1 className="font-bold ">Personals Details</h1>
        <p className="text-gray-500">Get started with the basics:your name and contact information.</p>
        <div className="h-[50vh] w-[90%]  border pl-[10px] flex flex-col gap-2 ">
          <div className="flex">
          {/* {JSON.stringify(information)} */}
            <div className="h-[10vh] w-[50%] text-[13px] gap-1 flex flex-col">
              <label>First Name</label>
              <input onChange={(e)=>setInformation({...information, firstName : e.target.value})}
                className="border-[1px] border-gray-300 outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[45%] text-[13px] gap-1  flex flex-col">
              <label>last Name</label>
              <input onChange={(e)=>setInformation({...information,lastName :e.target.value})}
                className="border-[1px] border-gray-300 outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="h-[10vh] w-[100%] text-[13px]  gap-1   flex flex-col">
            <label>job title</label>
            <input onChange={(e)=>setInformation({...information,jobTile:e.target.value})}
              className="border-[1px] border-gray-300 outline-none h-[4vh] w-[88%]"
              type="text"
            ></input>
          </div>
          <div className="h-[10vh] w-[100%] text-[13px] gap-1 flex flex-col">
            <label>Address1</label>
            <input onChange={(e)=>setInformation({...information,address:e.target.value})}
              className="border-[1px] border-gray-300 outline-none h-[4vh] w-[88%]"
              type="text"
            ></input>
          </div>
          <div className="flex">
            <div className="h-[10vh] w-[50%] gap-1 text-[13px] flex flex-col">
              <label>Phone</label>
              <input onChange={(e)=>setInformation({...information,phone:e.target.value})}
                className="border-[1px] border-gray-300 outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] gap-1 text-[13px] flex flex-col">
              <label>Email Address</label>
              <input onChange={(e)=>setInformation({...information,emailAddress:e.target.value})}
                className="border-[1px] border-gray-300 outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
          </div>
          {/* <div className="w-[100%]   text-[13px] flex justify-end pr-[100px] ">
            <button
              onClick={() => {navigate("/ProfessionalE")}}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Next
            </button>
          </div> */}
        </div>
        <div className="h-[5vh] w-[100%] flex text-[12px] items-center gap-2 text-blue-600">
           <label className="font-bold text-[15px] ">+</label>
           <label>Add social link</label>
           </div> 
      </div>
    </div>
  );
}

export default PersonalD;
