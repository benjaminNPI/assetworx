import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';



function App() {

  return (
    <div className='mt-20'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
