import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import PersonalD from "./Pages/PersonalD";
import ProfessionalE from "./Pages/ProfessionalE";
import Education from "./Pages/Education";
import Technicalskills from "./Pages/Technicalskills";
import SoftSkills from "./Pages/SoftSkills";
import Summarize from "./Pages/Summarize";
import MyContext from "./Pages/MyContext";

function App() {
  return (
    <MyContext>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PersonalD />}></Route>
          <Route path="/ProfessionalE" element={<ProfessionalE />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Technicalskills" element={<Technicalskills />}></Route>
          <Route path="/SoftSkills" element={<SoftSkills />}></Route>
          <Route path="/summarize" element={<Summarize />}></Route>
        </Routes>
      </HashRouter>
      </MyContext>
  );
}
export default App;
