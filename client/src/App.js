import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Footer from './components/Footer/index';


function App() {

  return (
    <>
      <BrowserRouter>
      <div className='pt-10 bg-gradient-to-r from-lightblue to-darkblue'></div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about-us" element={<About />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;
