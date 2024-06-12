import React from 'react'
import {HashRouter,Routes,Route } from 'react-router-dom'
import Technicalskills from './Pages/Technicalskills'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Technicalskills/>}>Technicalskills</Route>
      </Routes>
    </HashRouter>
  )
}

export default App