import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index'
import Footer from './components/Footer/index';


function App() {

  return (

   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

  );
}

export default App;
