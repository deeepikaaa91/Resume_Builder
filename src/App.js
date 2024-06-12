import React from 'react'
import {HashRouter,Routes,Route } from 'react-router-dom'
import Technicalskills from './Pages/Technicalskills'
import SoftSkills from './Pages/SoftSkills'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Technicalskills/>}>Technicalskills</Route>
        <Route path="/softskills" element={<SoftSkills/>}>Technicalskills</Route>

      </Routes>
    </HashRouter>
  )
}

export default App