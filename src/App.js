import React from 'react'
import {HashRouter,Routes,Route } from 'react-router-dom'
import Technicalskills from './Pages/Technicalskills'
import SoftSkills from './Pages/SoftSkills'
import PersonalD from './Pages/PersonalD'
import Summarize from './Pages/Summarize'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Technicalskills" element={<Technicalskills/>}></Route>
        <Route path="/" element={<PersonalD/>}></Route>
        <Route path="/SoftSkills" element={<SoftSkills/>}></Route>
        <Route path="/summarize" element={<Summarize/>}></Route>

      </Routes>
    </HashRouter>
  )
}

export default App;
