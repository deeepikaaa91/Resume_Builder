import React from 'react'
import {HashRouter,Routes,Route } from 'react-router-dom'
import Technicalskills from './Pages/Technicalskills'
import SoftSkills from './Pages/SoftSkills'
import PersonalD from './Pages/PersonalD'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Technicalskills" element={<Technicalskills/>}>Technicalskills</Route>
        <Route path="/" element={<PersonalD/>}>Technicalskills</Route>
        <Route path="/SoftSkills" element={<SoftSkills/>}>Technicalskills</Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
