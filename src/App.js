import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './i18n';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Thailand from './components/Thailand';
import Vietnam from './components/Vietnam';
import Bali from './components/Bali';
import KualaLumpur from './components/KualaLumpur';

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thailand" element={<Thailand />} />
            <Route path="/vietnam" element={<Vietnam />} />
            <Route path="/bali" element={<Bali />} />
            <Route path="/kuala-lumpur" element={<KualaLumpur />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
