import React from "react";

function Resume() {
  const personalDetail = JSON.parse(localStorage.getItem("personaldetail"))
  const professionalEx = JSON.parse(localStorage.getItem("professionalexp"))
  const education = JSON.parse(localStorage.getItem("Education"))
  const project = JSON.parse(localStorage.getItem("project"))
  const softSkills = JSON.parse(localStorage.getItem("softskills"))
  const summarise = JSON.parse(localStorage.getItem("summarise"))
  const technical = JSON.parse(localStorage.getItem("technical"))
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="w-[40%] h-[100vh] shadow-xl ">
        <div className="w-[100%] py-2 bg-rose-400 flex flex-col justify-center px-6">
          <h1 className="text-[30px] uppercase font-bold text-[white] ">
            {personalDetail.firstName} {personalDetail.lastName}
          </h1>
          <label className="text-[17px] text-[white]">
           {personalDetail.jobTile}
          </label>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[60%] flex flex-col  py-2  px-4">
            
            <h1 className="font-semibold text-rose-400 w-[55%] border-b-2 border-rose-400">
              My Contact
            </h1>

            <div className="w-[100%] flex flex-col py-2">
              <div className="w-[100%] flex items-center  gap-1">
                <i class="fa fa-envelope-o text-[12px]" aria-hidden="true"></i>
                <label className="text-[11px]">{personalDetail.emailAddress}</label>
              </div>
              <div className="w-[100%] flex items-center  gap-1">
                <i class="fa fa-phone text-[12px]" aria-hidden="true"></i>
                <label className="text-[12px]">{personalDetail.phone}</label>
              </div>
              <div className="w-[100%] flex items-center  gap-1">
                <i class="fa fa-map-marker text-[12px]" aria-hidden="true"></i>
                <label className="text-[11px]">{personalDetail.address}</label>
              </div>
            </div>

            <div className="w-[100%] flex flex-col py-2">
              <h1 className="font-semibold text-rose-400 w-[70%] border-b-2 border-rose-400">
                Technical Skills
              </h1>
              <div className="flex flex-col w-[100%] py-2">
                <label className="text-[11px]">. HTML5</label>
                <label className="text-[11px]">. CSS3</label>
                <label className="text-[11px]">. Javascript</label>
                <label className="text-[11px]">. Tailwind</label>
                <label className="text-[11px]">. React</label>
                <label className="text-[11px]">
                  . Git,GitHub and Restful APIs
                </label>
              </div>
            </div>

            <div className="w-[100%] flex flex-col py-2">
              <h1 className="font-semibold text-rose-400 w-[50%] border-b-2 border-rose-400">
                Soft Skills
              </h1>
              <div className="flex flex-col w-[100%] py-2">
                <label className="text-[11px]">. HTML5</label>
                <label className="text-[11px]">. CSS3</label>
                <label className="text-[11px]">. Javascript</label>
                <label className="text-[11px]">. Tailwind</label>
                <label className="text-[11px]">. React</label>
                <label className="text-[11px]">
                  . Git,GitHub and Restful APIs
                </label>
              </div>
            </div>

            <div className="w-[100%] flex flex-col">
              <h1 className="font-semibold text-rose-400 w-[90%] border-b-2 border-rose-400">
                Education Background
              </h1>
              <div>
              {education.map((i)=>
              <div className="flex flex-col w-[100%] py-2 text-[12px]">
                <li>{i.schoolName}, {i.schoolLocation}</li>
                <label className="ml-[10%]">{i.field}</label>
                <label className="ml-[10%]">Complete in {i.endDate}</label>
              </div>)}
              </div>
              
            </div>
          </div>
          <div className="w-[100%] flex flex-col  py-2  px-4">
            <h1 className="font-semibold text-rose-400 w-[26%] border-b-2 border-rose-400">
              About me
            </h1>

           <div className="w-[100%] py-2">
           <p className="text-[11px]">
              MeProjectsEnthusiastic and detail-oriented Frontend Web Developer
              . Proficientin HTML, CSS, JavaScript, and modern frameworks such
              as React.jsand Angular. Passionate about building responsive,
              accessible, andaesthetically pleasing web interfaces. Adept at collaborating withcross-functional teams to deliver high-quality digital experiences.
            </p>
           </div>
           <div>
           <h1 className="font-semibold text-rose-400 w-[26%] border-b-2 border-rose-400">
              Projects
            </h1>
            <h2 className="text-[15px] font-semibold">KK pricision Tools</h2>
            <label className="text-[13px]">Mould making company</label>
            <div className="flex flex-col w-[100%] py-2">
            <label className="text-[12px]">. Designed a responsive UI and optimized it to be available across all devices.</label>
            <label className="text-[12px]">. Technologies used - HTML,CSS,JavaScript,Bootstrap,reactJs,APIs.</label>
            <label className="text-[12px]">. The application utilize APIs to fetch exercise data and render workout routine dynamically.</label>
            <label className="text-[12px]">. Website Link - www.kkprecisiontools.com</label>
            </div>

            <h2 className="text-[15px] font-semibold">Instagram Clone</h2>
            <div className="flex flex-col w-[100%] py-2">
            <label className="text-[12px]">.Successfully built a Scalable and functional web application with feature similar to instagram</label>
            <label className="text-[12px]">. Improve understanding and application of React js and Fiberbase,enhansing skills in developing modern web applications with real-time capabilities. </label>
            <label className="text-[12px]">. The projects served as a significant portfolio piece, demonstrating advaced frontend development skills and then ability to handle full-stack development.</label>
            </div>

            <h2 className="text-[15px] font-semibold">Coding Shaala</h2>
            <label className="text-[13px]">Coding Learning Institute</label>
            <div className="flex flex-col w-[100%] py-2">
            <label className="text-[12px]">. Designing and implementing user interface using HTML,CSS and JavaScript.</label>
            <label className="text-[12px]">. Developing server-side logic and Restful APIs using the Nodejs back-end framework.</label>
            <label className="text-[12px]">. Implementing authentication and authorization mechanism for user access control.</label>
            <label className="text-[12px]">. Website Link - www.codingshaala.com</label>
            </div>



           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
