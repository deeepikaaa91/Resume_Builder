import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  const [projectObj, setProjectObj] = useState({});
  const [moreDiv, setMoreDiv] = useState([null]);

  const moreskills = () => {
    setMoreDiv([...moreDiv, null]);
  };
  return (
    <div className="h-[100vh]  w-[100%] flex flex-col  justify-center items-center ">
    <div>{JSON.stringify(projectObj)}</div>
      <div className=" w-[50%] shadow-2xl border-t-2  flex flex-col py-[2%] px-[4%] gap-3 border-blue-400  rounded-lg ">
        <h1 className="font-bold ">Projects</h1>
        <p>Add relevant professional Projects</p>
        <div className="flex  gap-10 justify-between">
          <div className="h-[10vh] w-[50%] flex flex-col">
            <label>Project Name</label>

            <input
              onChange={(e) =>
                setProjectObj({ ...projectObj, projectName: e.target.value })
              }
              className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
              type="text"
            ></input>
          </div>
          <div className="h-[10vh] w-[50%] flex flex-col">
            <label>Description</label>
            <input
              onChange={(e) =>
                setProjectObj({ ...projectObj, description: e.target.value })
              }
              className="border-[1px] border-black outline-none h-[4vh] w-[100%]"
              type="text"
            ></input>
          </div>
        </div>
        <div className="h-[50vh] w-[100%]  flex flex-col gap-2 ">
          <div className="flex flex-col gap-3">
            {moreDiv.map((i, index) => (
              <div className="h-[10vh] w-[100%] flex  pl-[10px] items-center border-[1px]  gap-2 justify-between">
                <label>Points</label>
                <input
                  className="border-[1px] border-black outline-none h-[4vh] w-[60%]"
                  type="text"
                ></input>
                <button
                  onClick={() =>
                    setMoreDiv(moreDiv.filter((j, jindex) => jindex != index))
                  }
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="w-[100%]  h-[10vh]  flex  pr-[60px] ">
              <button
                onClick={() => moreskills()}
                className="h-[5vh]  text-[15px] text-blue-600"
              >
                + Add More Skills
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]  h-[10vh]  flex  pr-[60px] ">
        <button
          onClick={() => moreskills()}
          className="h-[5vh]  text-[15px] text-blue-600"
        >
          + Add Project
        </button>
      </div>
      <div className="flex w-[100%] justify-end gap-2 pr-[20px]">
        <button
          onClick={() => navigate("/Education")}
          className="h-[5vh] w-[15%]  bg-[red] text-white  rounded-2xl  "
        >
          Back
        </button>
        <button
          onClick={() => {
            localStorage.setItem("project", JSON.stringify(projectObj));
            navigate("/resume");
          }}
          className="h-[5vh] w-[20%]  bg-[red] text-white  rounded-2xl  "
        >
          Create Resume
        </button>
      </div>
    </div>
  );
}

export default Project;
