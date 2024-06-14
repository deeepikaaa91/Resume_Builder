import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import PersonalD from './Pages/PersonalD'
import ProfessionalE from './Pages/ProfessionalE'
import Education from './Pages/Education'
import SoftSkills from './Pages/SoftSkills'
import Summarize from './Pages/Summarize'
import Resume from './Pages/Resume'



function App() {
  return (
    // <Mycontext>
    <HashRouter>
      <Routes>
        <Route path="/" element={<PersonalD/>}></Route>
        <Route path="/ProfessionalE" element={<ProfessionalE/>}></Route>
        <Route path="/Education" element={<Education/>}></Route>
        <Route path="/SoftSkills" element={<SoftSkills/>}></Route> 
        <Route path="/summarize" element={<Summarize/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
      </Routes>
    </HashRouter>
    // </Mycontext>
  )
}
export default App;
