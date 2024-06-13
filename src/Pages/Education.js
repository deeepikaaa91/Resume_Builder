import React from "react";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh]  w-[100%] flex justify-center items-center">
      <div className="w-[50%] shadow-2xl border-t-2   flex flex-col py-[1%] px-[4%] gap-2 border-green-400  rounded-lg ">
        <h1 className="font-bold ">Education</h1>
        <p>
          Add your most relevant educations,including program you,re currently
          enrolled in.
        </p>
        <div className=" w-[100%] flex flex-col gap-2 ">
          <div className="flex  gap-10 justify-between">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>School name</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col">
              <label>School Location</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex  gap-10 justify-between">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>start Date</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col">
              <label>End Date </label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
                type="text"
              ></input>
            </div>
          </div>

          <div className="flex  gap-10 justify-between">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Degree</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Field of study</label>
              <input
                className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
                type="text"
              ></input>
            </div>
          </div>
          <div className="h-[20vh] w-[100%] flex flex-col ">
            <label>Description</label>
            <textarea
              className="border-[1px] h-[20vh] pl-[10px]"
              placeholder="enter your work summary......."
            ></textarea>
          </div>
          <div className="flex w-[100%] justify-end gap-2 pr-[20px]">
            <button
              onClick={() => navigate("/ProfessionalE")}
              className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
            >
              Back
            </button>
            <button
              onClick={() => navigate("/Technicalskills")}
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

export default Education;
