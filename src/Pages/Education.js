import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function Education() {
  const navigate = useNavigate();
  const [educationList, setEducationList] = useState([])
  const [educationObj, setEducationObj] = useState({});
  const [edu, setEdu] = useState([null])
  const [hideDiv, setHideDiv] = useState(0)


  return (
    <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center ">
    {/* {JSON.stringify(educationObj)}
    <div>
      {JSON.stringify(educationList)}
    </div> */}
    <div className="flex w-[50%] justify-end gap-2 p-4">
        <button
          onClick={() => navigate("/ProfessionalE")}
          className="h-[5vh] w-[10%]  bg-[red] text-white  rounded-2xl  "
        >
          Back
        </button>
        <button
          onClick={() => {
            setEducationList([...educationList, educationObj])
            localStorage.setItem("Education", JSON.stringify(educationList));
            navigate("/TechnicalSkills");
          }}
          className="h-[5vh] w-[10%]  bg-[red] text-white  rounded-2xl  "
        >
          Next
        </button>
      </div>
  <div className="  w-[50%]   shadow-2xl rounded-lg border-t-2 border-green-400 p-4   ">
  <h1 className=" text-[22px] flex pl-14">Education</h1>
        <p className=" w-[80%] pl-14">
          Add your most relevant educations,including program you,re currently
          enrolled in.
        </p>
  {edu.map((i, index)=>
      <div style={{ height:hideDiv==index ? 'auto' : '5vh'}} className="w-[100%] overflow-hidden    flex flex-col py-[1%] px-[4%] gap-2  rounded-lg ">
      <div className="h-[5vh] border flex items-center justify-end pr-3 rounded-lg">
        <label className="" style={{transform: 'rotate(90deg)'}}>{">"}</label>
      </div>
        
        <div className=" w-[100%] flex flex-col gap-2 border p-4 rounded-lg">
          <div className="flex  gap-10 justify-between text-[12px]">
            <div className="h-[10vh] w-[50%] flex flex-col gap-1">
              <label>School name</label>
              <input
                onChange={(e) =>
                  setEducationObj({...educationObj, schoolName: e.target.value})
                }
                className="border-[1px] outline-blue-300 h-[4vh] w-[100%] rounded-[3px] pl-2 "
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col gap-1">
              <label>School Location</label>
              <input
                onChange={(e) =>
                  setEducationObj({
                    ...educationObj,
                    schoolLocation: e.target.value,
                  })
                }
                className="border-[1px] outline-blue-300 h-[4vh] w-[100%] rounded-[3px] pl-2"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex  gap-10 justify-between text-[12px]">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>start Date</label>
              <input
                onChange={(e) =>
                  setEducationObj({
                    ...educationObj,
                    startDate: e.target.value,
                  })
                }
                className="border-[1px] outline-blue-300  h-[4vh] w-[100%] rounded-[3px] pl-2"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%]  flex flex-col">
              <label>End Date </label>
              <input
                onChange={(e) =>
                  setEducationObj({ ...educationObj, endDate: e.target.value })
                }
                className="border-[1px] outline-blue-300  h-[4vh] w-[100%] rounded-[3px] pl-2"
                type="text"
              ></input>
            </div>
          </div>

          <div className="flex  gap-10 justify-between text-[12px]">
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Degree</label>

              <input
                onChange={(e) =>
                  setEducationObj({ ...educationObj, degree: e.target.value })
                }
                className="border-[1px] outline-blue-300  h-[4vh] w-[100%] rounded-[3px] pl-2"
                type="text"
              ></input>
            </div>
            <div className="h-[10vh] w-[50%] flex flex-col">
              <label>Field of study</label>
              <input
                onChange={(e) =>
                  setEducationObj({ ...educationObj, field: e.target.value })
                }
                className="border-[1px] outline-blue-300  h-[4vh] w-[100%] rounded-[3px] pl-2"
                type="text"
              ></input>
            </div>
          </div>
          {/* <div className="h-[20vh] w-[100%] flex flex-col ">
            <label>Description</label>
            <textarea onChange={(e)=>setEducationObj({...educationObj, description : e.target.value})}
              className="border-[1px] h-[20vh] pl-[10px]"
              placeholder="enter your work summary......."
            ></textarea>
          </div> */}
        </div>
      </div>)}
      
      <div className="w-[100%]  h-[10vh]  flex pl-8   ">
        <button onClick={()=>{setEducationList([...educationList, educationObj]); setEducationObj({}) ;setHideDiv(edu.length) ;setEdu([...edu, null])}} className="h-[5vh]  text-[15px] text-blue-600">
          + Add Education
        </button>
      </div>
      
    </div>
    
    </div>
    
  );
}

export default Education;
