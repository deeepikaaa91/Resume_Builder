import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import PersonalD from './Pages/PersonalD'
import ProfessionalE from './Pages/ProfessionalE'
import Education from './Pages/Education'
import SoftSkills from './Pages/SoftSkills'
import Summarize from './Pages/Summarize'
import Resume from './Pages/Resume'
import Project from './Pages/Project'
import Technicalskills from './Pages/Technicalskills'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PersonalD/>}></Route>
        <Route path="/ProfessionalE" element={<ProfessionalE/>}></Route>
        <Route path="/Education" element={<Education/>}></Route>
        <Route path="/SoftSkills" element={<SoftSkills/>}></Route> 
        <Route path="/summarize" element={<Summarize/>}></Route>
        <Route path="/TechnicalSkills" element={<TechnicalSkills/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/technicalskills" element={<Technicalskills/>}></Route>

    </Routes>
    </HashRouter>
  )
}
export default App;
