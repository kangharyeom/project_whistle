import React, { useState } from 'react';

import Header from './components/Header';

import Footer from './components/Footer';

import Login from './pages/Login';
import Matching from './pages/matching/Matching';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
  setIsLoggedIn(true);
};

const handleLogout = () => {
  setIsLoggedIn(false);
};

  return (
    <BrowserRouter >
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/log-in" element={<Login />} />
          <Route path="/matching" element={<Matching />} />
        </Routes>
        <Footer isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </BrowserRouter>
  );
};

export default App;
