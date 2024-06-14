import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextStore } from "./MyContext";

function PersonalD() {
  const navigate = useNavigate();
  const[information ,setInformation] = useState({})
  const{click, setClick} = useContext(ContextStore)
  
  return (
    <div className="h-[100vh]  w-[100%] flex justify-center items-center">
     <div>
      {click}
      <button onClick={()=>setClick(click+1)}>press</button>
      </div>
      <div className="h-[60vh] w-[50%] shadow-2xl border-t-2  flex flex-col pt-[10px] pl-[50px] gap-1 border-blue-900  rounded-lg ">
        <h1 className="font-bold ">Personals Details</h1>
        <p>Get started with the basics:your name and contact information.</p>
        <div className="h-[50vh] w-[100%]  flex flex-col gap-2 ">
          <div className="flex">
          {JSON.stringify(information)}
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>First Name</label>
              <input onChange={(e)=>setInformation({...information, firstName : e.target.value})}
                className="border-[1px] border-black outline-none h-[4vh] w-[70%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col">
              <label>last Name</label>
              <input onChange={(e)=>setInformation({...information,lastName :e.target.value})}
                className="border-[1px] border-black outline-none h-[4vh] w-[70%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="h-[10vh] w-[100%]    flex flex-col">
            <label>job title</label>
            <input onChange={(e)=>setInformation({...information,jobTile:e.target.value})}
              className="border-[1px] border-black outline-none h-[4vh] w-[85%]"
              type="text"
            ></input>
          </div>
          <div className="h-[10vh] w-[100%] flex flex-col">
            <label>Address1</label>
            <input onChange={(e)=>setInformation({...information,address:e.target.value})}
              className="border-[1px] border-black outline-none h-[4vh] w-[85%]"
              type="text"
            ></input>
          </div>
          <div className="flex">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Phone</label>
              <input onChange={(e)=>setInformation({...information,phone:e.target.value})}
                className="border-[1px] border-black outline-none h-[4vh] w-[70%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Email Address</label>
              <input onChange={(e)=>setInformation({...information,emailAddress:e.target.value})}
                className="border-[1px] border-black outline-none h-[4vh] w-[70%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="w-[100%]   flex justify-end pr-[100px] ">
            <button
              onClick={() => {navigate("/ProfessionalE")}}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalD;
