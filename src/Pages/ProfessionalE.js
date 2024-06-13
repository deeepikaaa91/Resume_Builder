import React from "react";
import { useNavigate } from "react-router-dom";

function ProfessionalE() {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh]  w-[100%] flex justify-center items-center">
      <div className="h-[70vh] w-[50%] shadow-2xl border-t-2  flex flex-col pt-[10px] pl-[50px] gap-1 border-red-400  rounded-lg ">
        <h1 className="font-bold ">Professional Experience</h1>
        <p>Tell us about your most recent job.</p>
        <div className="h-[50vh] w-[100%]  flex flex-col gap-2 ">
          <div className="flex">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Position Title</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col">
              <label>Company Name</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>city</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col">
              <label>State</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
          </div>

          <div className="flex">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>start Date</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>End Date</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[80%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="h-[20vh] w-[90%] flex flex-col ">
            <label>work Summary</label>
            <textarea
              className="border-[1px] h-[20vh] pl-[10px]"
              placeholder="enter your work summary......."
            ></textarea>
          </div>
          <div className="flex w-[100%] justify-end gap-2 pr-[20px]">
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
        </div>
      </div>
    </div>
  );
}

export default ProfessionalE;
