import React, { useState } from 'react';

import Header from './components/Header';

import Footer from './components/Footer';

import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Match from './pages/match/Match';

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/match" element={<Match />} />
        </Routes>
        <Footer isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </BrowserRouter>
  );
};

export default App;
