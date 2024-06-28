import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Map from './components/Map';
import SurvivalGuide from './components/survivalGuide';
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <div className='containter'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/survival-guide" element={<SurvivalGuide />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
