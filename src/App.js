import React from 'react'
import './app.css'
import './media.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptionBox from './Components/OptionBox'
import AcademicForm from './pages/AcademicForm';

const App = () => {
  return (

    // <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OptionBox />} />
           <Route path='/academic' element={<AcademicForm />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    // </div>
  )
}

export default App