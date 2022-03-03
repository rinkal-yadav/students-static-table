import Header from './Components/Header'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Students from './Components/Students';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/student' element={<Students />} />
          <Route path='/edit' element={<PageNotFound/>}/>
          <Route path='/contact' element={<Contact />} />

        </Routes>




      </Router>
    </div>
  );
}

export default App;
